"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, ChevronDown, Clock, User, Users } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import {
  useAddBookingsMutation,
  useCheckTableAvailabilityQuery,
} from "@/services/bookings/api";
import TextArea from "../FormInputs/TextAreaInput";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useAddNotificationsMutation } from "@/services/notifications/api";

export function ReservationSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({});
  const router = useRouter();
  const [selectedPeople, setSelectedPeople] = useState();
  const [selectedTime, setSelectedTime] = useState({
    label: "Select time",
    value: "Select Time",
  });
  const [availabilityData, setAvailabilityData] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const [availibilityLoading, setAvailibilityLoading] = useState(false);
  const { venue } = useSelector((state) => state.venue);

  const bookingDate = watch("booking_date");
  const {
    data: checkTableAvailability,
    isLoading: isAvailabilityLoading,
    refetch,
  } = useCheckTableAvailabilityQuery({
    selectedCapacity: selectedPeople?.value,
    bookingDate,
    startTime:
      bookingDate &&
      selectedTimeSlot?.start_time &&
      convertToTimestamp(bookingDate, selectedTimeSlot?.start_time),
    endTime:
      selectedTimeSlot?.end_time &&
      bookingDate &&
      convertToTimestamp(bookingDate, selectedTimeSlot?.end_time),
  });
  const [addBookings, { isLoading, isSuccess, isError, error }] =
    useAddBookingsMutation();
  const [addNotification] = useAddNotificationsMutation();

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hours = String(Math.floor(i / 2)).padStart(2, "0");
    const minutes = i % 2 === 0 ? "00" : "30";
    // Start time
    const start_time = `${hours}:${minutes}`;
    // Create date object to calculate end time
    const startDate = new Date();
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    const formatTime = (date) =>
      `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}`;
    const end_time = formatTime(endDate);
    return {
      label: start_time,
      value: start_time,
      start_time,
      end_time,
    };
  });

  const partySizeOptions = [
    { label: "1 - (Single Person)", value: 1 },
    { label: "2 - (2-Persons)", value: 2 },
    { label: "3 - (3-Persons)", value: 3 },
    { label: "4 - (4-Persons)", value: 4 },
    { label: "5 - (5-Persons)", value: 5 },
    { label: "6 - (6-Persons)", value: 6 },
    { label: "7 - (7-Persons)", value: 7 },
    { label: "8 - (8-Persons)", value: 8 },
    { label: "9 - (9-Persons)", value: 9 },
    { label: "10 - (10-Persons)", value: 10 },
    { label: "11 - (11-Persons)", value: 11 },
    { label: "12 - (12-Persons)", value: 12 },
    { label: "13 - (13-Persons)", value: 13 },
    { label: "14 - (14-Persons)", value: 14 },
    { label: "15 - (15-Persons)", value: 15 },
    { label: "More than 15", value: "more" },
  ];

  function convertToTimestamp(dateString, timeString) {
    const [hours, minutes] = timeString?.split(":")?.map(Number);
    const date = new Date(dateString);
    date?.setHours(hours, minutes, 0, 0);
    const data = date?.toISOString();
    return data ? data : "";
  }

  const handleSelectTime = async (value) => {
    const selectTime = timeSlots?.find((slot) => slot?.value === value);
    setSelectedTimeSlot(selectTime);
    setSelectedTime(value);
  };

  const handleSelectPeople = async (value) => {
    const selectPeople = partySizeOptions?.find(
      (size) => size?.value.toString() === value.toString()
    );
    setSelectedPeople(selectPeople);
  };

  const handleCheckAvailability = async () => {
    if (
      !selectedPeople ||
      selectedPeople?.value === "Select People" ||
      selectedTime?.value === "Select Time" ||
      !bookingDate
    ) {
      return toast.error("Please select number of people, date and time.");
    }
    setAvailibilityLoading(true);
    const res = await refetch(
      selectedPeople,
      bookingDate,
      selectedTime?.start_time,
      selectedTime?.end_time
    );
    if (res?.isError) {
      setAvailabilityData("");
      toast?.error(res.error);
    }

    if (res?.isSuccess) {
      const availableTables = res?.data?.allTables?.filter(
        (t) => t.available_tables > 0
      );

      setAvailabilityData(res?.data?.available);
    }

    setAvailibilityLoading(false);
  };

  const saveData = async (e) => {
    e.preventDefault();
    setAvailibilityLoading(true);
    const data = watch();
    const start_at = convertToTimestamp(
      data?.booking_date,
      selectedTimeSlot?.start_time
    );
    const ends_at = convertToTimestamp(
      data?.booking_date,
      selectedTimeSlot?.end_time
    );
    const formData = {
      venue_id: venue?.id,
      customer_name: data.name,
      phone: data.phone,
      email: data.email,
      party_size: availabilityData?.capacity,
      booking_date: bookingDate,
      starts_at: start_at,
      ends_at: ends_at,
      source: "online",
      table_id: availabilityData?.table_id,
      table_text: `${availabilityData?.capacity} - Seater`,
      notes: data.notes,
    };
    const notificationData = {
      venue_id: venue?.id,
      message: `New booking placed by ${data.name} for ${bookingDate}.`,
      type: "booking_new",
      url: "bookings",
      payload: formData,
      is_read: false,
    };
    const res = await addBookings(formData);
    const notificationres = await addNotification(notificationData);
    localStorage.setItem("lastBooking", JSON.stringify(formData));
    setAvailibilityLoading(false);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
    if (isSuccess) {
      // setValue("booking_date", "");
      setValue("name", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("notes", "");
      setSelectedPeople("");
      setAvailabilityData("");
      toast.success("Booking Created Successfully!");
      router.push("/booking-success");
    }
  }, [isError, isSuccess, isLoading]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <Image
              width={600}
              height={600}
              src="/table-restaurant.jpg"
              alt="Professional server holding gourmet dish"
              className="w-full h-[700px] md:h-[800px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Booking Form */}
          <div className="bg-emerald-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-8">
              Book your table
            </h2>

            <form
              // onSubmit={handleSubmit(saveData)}
              className="p-6 space-y-6 bg-white"
            >
              {/* People Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* People Grid */}
                <div className="space-y-2">
                  <SelectGroup>
                    <SelectLabel className={"text-sm font-medium text-black"}>
                      Select Peoples
                    </SelectLabel>
                  </SelectGroup>
                  <Select
                    className="w-full"
                    value={selectedPeople?.value}
                    onValueChange={(val) => handleSelectPeople(val)}
                  >
                    <SelectTrigger className="min-w-36 shadow-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {partySizeOptions.map((num) => (
                        <>
                          <SelectItem key={num.value} value={num.value}>
                            {num.label}
                          </SelectItem>
                        </>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 mt-1">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Booking Date"
                    name="booking_date"
                    type="date"
                    icon={Clock}
                  />
                </div>
                {/* Time Slots */}
                <div className="space-y-2">
                  <SelectGroup>
                    <SelectLabel className={"text-sm font-medium text-black"}>
                      Select Time
                    </SelectLabel>
                  </SelectGroup>
                  <Select
                    className="w-full"
                    value={selectedTime}
                    onValueChange={(val) => handleSelectTime(val)}
                  >
                    <SelectTrigger className="w-40 shadow-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"Select Time"}>
                        {"Select time"}
                      </SelectItem>
                      {timeSlots.map((time) => (
                        <>
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        </>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {availabilityData && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-green-800 mb-1">
                      Table Availability Results!
                    </h4>
                    <p className="text-green-700 text-sm">
                      <span className="font-medium">
                        Table {`${availabilityData?.capacity} - Seater`}
                      </span>{" "}
                      (Capacity: {availabilityData.capacity} guests) is
                      available for{" "}
                      <span className="font-medium">{bookingDate}</span> at{" "}
                      <span className="font-medium">{selectedTime}</span>
                    </p>
                  </div>
                </div>
              )}
              {/* Reserve Button */}
              <Button
                type="button"
                disabled={availibilityLoading}
                onClick={handleCheckAvailability}
                className="w-full bg-emerald-800 hover:bg-emerald-700 text-white py-3 text-lg font-medium cursor-pointer"
              >
                {availibilityLoading ? "Checking..." : "Check Availability"}
              </Button>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Customer Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Name"
                      name="name"
                      icon={User}
                    />
                  </div>

                  <div className="space-y-2">
                    <TextInput
                      register={register}
                      errors={errors}
                      label="Phone"
                      name="phone"
                      icon={Clock}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Email"
                    name="email"
                    type="email"
                    icon={MdEmail}
                  />
                </div>

                <div className="space-y-2">
                  <TextArea
                    register={register}
                    errors={errors}
                    label="Notes"
                    name="notes"
                    required={false}
                  />
                </div>
              </div>
              <Button
                // type="submit"
                disabled={!selectedTime}
                onClick={saveData}
                className="w-full bg-emerald-800 hover:bg-emerald-700 text-white py-3 text-lg font-medium cursor-pointer"
              >
                {selectedTime
                  ? `Reserve a table at ${selectedTime}`
                  : "Select a time to reserve"}
              </Button>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-500">powered by </span>
                <span className="text-sm font-medium text-orange-500">
                  DigiResto
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
