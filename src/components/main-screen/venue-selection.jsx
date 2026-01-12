"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Phone,
  Filter,
  Star,
  X,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useGetVenuesQuery } from "@/services/venues/api";
import { supabase } from "@/actions/baseURL/base_url";
export function VenueSelectionModal({
  isOpen,
  onVenueSelect,
  onClose,
  isChangingVenue = false, // Added venue change mode
}) {
  const [filterType, setFilterType] = useState("All");

  const { data: venues = [], error, isSuccess, refetch: venuesRefetch } = useGetVenuesQuery();

   useEffect(() => {
      const channel = supabase.channel("venues-channel");
      // Listen for INSERT
      channel.on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "venues" },
        (payload) => {
          venuesRefetch();
        }
      );
  
      // Listen for DELETE
      channel.on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "venues" },
        (payload) => {
          venuesRefetch();
        }
      );
  
      // (Optional) Listen for UPDATE too
      channel.on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "venues" },
        (payload) => {
          venuesRefetch();
        }
      );
  
      channel.subscribe();
  
      return () => {
        supabase.removeChannel(channel);
      };
    }, [venuesRefetch]);

  const venueOptions = venues?.map((venue, idx) => {
    return { id: idx + 1, label: venue?.display_name, value: venue?.id };
  });
  const filteredVenues = (() => {
    if (!filterType) return venues; // no filter → return all

    const matches = venues?.filter((venue) => venue.id === filterType);

    return matches?.length > 0 ? matches : venues;
  })();

  const getVenueStatus = (venue) => {
    if (venue.service_paused)
      return {
        status: "paused",
        label: "Service Paused",
        color: "bg-orange-500",
      };
    if (!venue.online_ordering_enabled && !venue.bookings_enabled)
      return {
        status: "closed",
        label: "Temporarily Closed",
        color: "bg-red-500",
      };
    return { status: "open", label: "Open", color: "bg-green-500" };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl min-w-2xl max-h-[95vh] overflow-hidden p-0">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 relative">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-2">
              {isChangingVenue
                ? "Change Your Location"
                : "Choose Your Hunger Valley"}
            </DialogTitle>
            <p className="text-red-100 text-center text-lg">
              {isChangingVenue
                ? "Select a different location for your order or reservation"
                : "Select your preferred location for the ultimate burger experience"}
            </p>
          </DialogHeader>
        </div>

        <div className="p-6 border-b bg-gray-50">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Filter & Sort:
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <SelectGroup>
                <SelectLabel className={"text-sm font-medium text-black"}>
                  Select Time
                </SelectLabel>
              </SelectGroup>
              <Select
                className="w-full"
                value={filterType}
                onValueChange={(val) => setFilterType(val)}
              >
                <SelectTrigger className="w-40 shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={"All"}>{"Select Venue"}</SelectItem>
                  {venueOptions.map((options) => (
                    <>
                      <SelectItem key={options.id} value={options.value}>
                        {options.label}
                      </SelectItem>
                    </>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto scrollbar-hide max-h-[60vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {filteredVenues?.map((venue) => {
              const venueStatus = getVenueStatus(venue);

              return (
                <Card
                  key={venue.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-0 border-0 shadow-lg"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={venue.image || "/venue_image.jpg"}
                      alt={venue.display_name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-black hover:bg-white">
                        <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {venue.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="bg-red-600 text-white hover:bg-red-700"
                      >
                        {venue.distance}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge className={`${venueStatus.color} text-white`}>
                        {venueStatus.status === "open" ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <AlertCircle className="w-3 h-3 mr-1" />
                        )}
                        {venueStatus.label}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-xl text-gray-900">
                        {venue.display_name}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {venue?.type?.replace("-", " ")?.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-600" />
                        <span>{venue.address}</span>
                      </div>

                      {/* <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 flex-shrink-0 text-red-600" />
                        <span>{venue.hours}</span>
                      </div> */}

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4 flex-shrink-0 text-red-600" />
                        <span>{venue.phone_no}</span>
                      </div>

                      {venue.online_ordering_enabled &&
                        !venue.service_paused && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4 flex-shrink-0 text-green-600" />
                            <span>
                              Order cutoff: {venue.order_cutoff_minutes} minutes
                            </span>
                          </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {venue?.features?.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => onVenueSelect(venue, "order")}
                        disabled={
                          !venue.online_ordering_enabled || venue.service_paused
                        }
                        className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {venue.service_paused
                          ? "Service Paused"
                          : !venue.online_ordering_enabled
                          ? "Ordering Disabled"
                          : "Order Food"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => onVenueSelect(venue, "reserve")}
                        disabled={
                          !venue.online_bookings_enabled || venue.service_paused
                        }
                        className="flex-1 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-2.5 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400 cursor-pointer"
                      >
                        {venue.service_paused
                          ? "Service Paused"
                          : !venue.online_bookings_enabled
                          ? "Bookings Disabled"
                          : "Reserve Table"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredVenues.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No venues found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
