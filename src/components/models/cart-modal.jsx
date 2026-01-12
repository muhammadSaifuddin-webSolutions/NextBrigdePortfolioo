"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Minus, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  useGetAddOnsByItemIdQuery,
  useGetRemovalIngredientsByItemIdQuery,
} from "@/services/menu-removal-ingredients/api";
import { Badge } from "../ui/badge";
import Image from "next/image";

export function CartModal({
  isOpen,
  onClose,
  item,
  onAddToCart,
  // addOns,
  // removalIngredients,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedModifiers, setSelectedModifiers] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedRemovals, setSelectedRemovals] = useState([]);
  const [selectedProductAddons, setSelectedProductAddons] = useState([]);
  const [selectedRemovalIngredients, setSelectedRemovalIngredients] = useState(
    []
  );
  const [selectedCategoryAddons, setSelectedCategoryAddons] = useState([]);
  const [errors, setErrors] = useState({});
  const { data: removalIngredients, refetch: removalIngredientsRefetch } =
    useGetRemovalIngredientsByItemIdQuery(item?.id);
  const { data: addOns, refetch: addOnsRefetch } = useGetAddOnsByItemIdQuery(
    item?.id
  );

  useEffect(() => {
    if (item && isOpen) {
      // Reset selections when modal opens
      setQuantity(1);
      setSelectedModifiers({});
      setSelectedAddOns([]);
      setSelectedRemovals([]);
      setSelectedCategoryAddons([]);
      setErrors({});
    }
  }, [item, isOpen]);

  if (!item) return null;

  const handleModifierChange = (
    groupName,
    modifierName,
    modifierPrice,
    checked
  ) => {
    const group = item?.categories?.category_option_groups?.find(
      (g) => g?.option_groups?.name === groupName
    );
    if (!group) return;

    setSelectedCategoryAddons((prev) => {
      const isSelected = prev?.some((item) => item.name === modifierName);
      if (isSelected) {
        return prev.filter((item) => item.name !== modifierName);
      } else {
        return [...prev, { name: modifierName, price: modifierPrice }];
      }
    });

    setSelectedModifiers((prev) => {
      const current = prev[groupName] || [];
      let updated;
      if (group.displayType === "dropdown") {
        // For dropdown, only one selection allowed
        updated = checked ? [modifierName] : [];
      } else {
        // For checkbox, handle multiple selections with min/max limits
        if (checked) {
          if (current.length < group?.option_groups?.max_select) {
            updated = [...current, modifierName];
          } else {
            updated = current;
          }
        } else {
          updated = current.filter((id) => id !== modifierName);
        }
      }

      return { ...prev, [groupName]: updated };
    });

    // Clear error when user makes a selection
    if (errors[groupName]) {
      setErrors((prev) => ({ ...prev, [groupName]: "" }));
    }
  };

  const handleAddOnChange = (addOnName, checked) => {
    const addon = addOns?.find((a) => a.name === addOnName);
    setSelectedProductAddons((prev) => {
      const isSelected = prev.some((item) => item.name === addon.name);
      if (isSelected) {
        return prev.filter((item) => item.name !== addon.name);
      } else {
        return [
          ...prev,
          { id: addon.id, name: addon.name, price: addon?.price },
        ];
      }
    });
    setSelectedAddOns((prev) =>
      checked ? [...prev, addOnName] : prev.filter((id) => id !== addOnName)
    );
  };

  const handleRemovalChange = (removalName, checked) => {
    const removal = removalIngredients?.find((r) => r.name === removalName);
    if (!removal) return;

    setSelectedRemovalIngredients((prev) => {
      const isSelected = prev.some((item) => item.name === removal.name);
      if (isSelected) {
        return prev.filter((item) => item.name !== removal.name);
      } else {
        return [...prev, { id: removal.id, name: removal.name }];
      }
    });
    setSelectedRemovals((prev) =>
      checked ? [...prev, removalName] : prev.filter((id) => id !== removalName)
    );
  };

  const validateSelections = () => {
    const newErrors = {};
    let isValid = true;
    item?.categories?.category_option_groups?.forEach((group) => {
      const selected = selectedModifiers[group?.option_groups?.name] || [];

      // Correct property names from your data
      const minSelect = group.option_groups?.min_select;
      const maxSelect = group.option_groups?.max_select;
      if (minSelect && selected.length < minSelect) {
        newErrors[group.id] = `Please select at least ${minSelect} option(s)`;
        isValid = false;
      }

      if (maxSelect && selected.length > maxSelect) {
        newErrors[group.id] = `Please select at most ${maxSelect} option(s)`;
        isValid = false;
      }
    });
    setErrors(newErrors);
    return isValid;
  };

  const calculateTotalPrice = () => {
    let total = Number.parseFloat(
      (item?.base_price).toString()?.replace("$", "")
    );

    // Add modifier prices
    item?.categories?.category_option_groups?.forEach((group) => {
      const selected = selectedModifiers[group?.option_groups?.name] || [];
      selected.forEach((modifierId) => {
        const modifier = group?.option_groups?.options.find(
          (m) => m.name === modifierId
        );
        if (modifier) total += modifier?.price_delta;
      });
    });
    // Add add-on prices
    addOns?.forEach((addOn) => {
      if (selectedAddOns.includes(addOn.name)) {
        total += addOn.price;
      }
    });

    return total * quantity;
  };

  const handleAddToCart = () => {
    if (!validateSelections()) return;
    const customizations = {
      quantity,
      modifiers: selectedModifiers,
      addOns: selectedAddOns,
      removals: selectedRemovals,
      selectedProductAddons,
      selectedRemovalIngredients,
      selectedCategoryAddons,
      totalPrice: calculateTotalPrice(),
    };

    onAddToCart(item, customizations);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{item.name}</DialogTitle>
        </DialogHeader>

        {/* Fixed Top Section */}
        <div className="shrink-0 space-y-6">
          <div className="flex gap-4">
            <Image
              width={400}
              height={400}
              src={item.image_url}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-lg font-bold text-red-600 mt-2">
                ${item.base_price}
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Middle Section */}
        <div className="flex-1 overflow-y-auto scrollbar-hide mt-4 space-y-6">
          {/* Groups and Modifiers */}
          {item?.categories?.category_option_groups.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700 border-b border-gray-200 pb-1">
                Category Add-On's
              </div>
            </div>
          )}

          {item?.categories?.category_option_groups?.map((group) => (
            <Card key={group.id} className="p-4">
              <div className="mb-3">
                <h3 className="font-semibold text-lg">
                  {group?.option_groups?.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Select{" "}
                  {group?.option_groups?.min_select ===
                  group?.option_groups?.max_select
                    ? group?.option_groups?.min_select
                    : `${group?.option_groups?.min_select}-${group?.option_groups?.max_select}`}{" "}
                  option(s)
                </p>
                {errors[group.id] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[group.id]}
                  </p>
                )}
              </div>

              {group?.option_groups?.display_type === "dropdown" ? (
                <Select
                  value={selectedModifiers[group.name]?.[0] || ""}
                  onValueChange={(value) =>
                    handleModifierChange(
                      group?.option_groups?.name,
                      value?.name,
                      value?.price_delta,
                      true
                    )
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {group?.option_groups?.options?.map((modifier) => (
                      <SelectItem key={modifier.id} value={modifier}>
                        <div className="flex justify-between items-center w-full">
                          <span>{modifier.name}</span>
                          {modifier.price_delta > 0 && (
                            <span className="text-green-600 ml-2">
                              +${modifier.price_delta.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <>
                  <div className="space-y-2">
                    {group?.option_groups?.options?.map((modifier) => {
                      const groupName = group?.option_groups?.name;
                      const isSelected = selectedCategoryAddons?.some(
                        (item) => item.name === modifier.name
                      );
                      const isDisabled =
                        !isSelected &&
                        selectedCategoryAddons?.filter((item) =>
                          group?.option_groups?.options.some(
                            (opt) => opt.name === item.name
                          )
                        ).length >= group?.option_groups?.max_select;

                      return (
                        <div
                          key={modifier.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={modifier.id}
                            disabled={isDisabled}
                            checked={
                              selectedModifiers[
                                group?.option_groups?.name
                              ]?.includes(modifier.name) || false
                            }
                            onCheckedChange={(checked) => {
                              if (!isDisabled) {
                                handleModifierChange(
                                  groupName,
                                  modifier.name,
                                  modifier?.price_delta,
                                  checked
                                );
                              }
                            }}
                          />
                          <label
                            htmlFor={modifier.id}
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <span>{modifier.name}</span>
                              {modifier.price_delta > 0 && (
                                <span className="text-green-600">
                                  +${modifier.price_delta.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </Card>
          ))}


          {/* Add-ons */}
          {addOns && addOns?.length > 0 && (
            <>
              <div className="space-y-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <Plus className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Add-On's
                  </h4>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {addOns?.length}
                  </Badge>
                </div>
                {/* <Card className="p-4">
                <h3 className="font-semibold text-lg mb-3">Add-ons</h3> */}
                <div className="space-y-2">
                  {addOns.map((addOn) => (
                    <div
                      key={addOn.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg border transition-all cursor-pointer ${
                        selectedAddOns.includes(addOn.id)
                          ? "bg-green-100 border-green-300 shadow-sm"
                          : "bg-white border-green-200 hover:bg-green-50"
                      }`}
                      // className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={addOn.id}
                        checked={selectedAddOns.includes(addOn.name)}
                        onCheckedChange={(checked) =>
                          handleAddOnChange(addOn.name, checked)
                        }
                      />
                      <label
                        htmlFor={addOn.id}
                        className="flex-1 cursor-pointer"
                      >
                        <div className="flex justify-between items-center">
                          <span>{addOn.name}</span>
                          <span className="font-semibold text-green-600">
                            +${addOn.price.toFixed(2)}
                          </span>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                {/* </Card> */}
              </div>
            </>
          )}

          {/* Removal Ingredients */}
          {removalIngredients && removalIngredients?.length > 0 && (
            <div className="space-y-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200 shadow-sm">
              <div className="flex items-center gap-2">
                <Minus className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-gray-900 text-lg">
                  Removal Ingredients
                </h4>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  {removalIngredients?.length}
                </Badge>
              </div>

              <div className="space-y-2">
                {removalIngredients.map((removal) => (
                  <div
                    key={removal.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-all cursor-pointer ${
                      selectedRemovals.includes(removal.id)
                        ? "bg-red-100 border-red-300 shadow-sm"
                        : "bg-white border-red-200 hover:bg-red-50"
                    }`}
                    // className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={removal.id}
                      checked={selectedRemovals.includes(removal.name)}
                      onCheckedChange={(checked) =>
                        handleRemovalChange(removal.name, checked)
                      }
                    />
                    <label
                      htmlFor={removal.id}
                      className="flex-1 cursor-pointer"
                    >
                      <span>Remove {removal.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          
        </div>

        {/* Fixed Bottom Section */}
        <div className="shrink-0 space-y-4 mt-0">
          <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-semibold">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap text-right">
              <p className="text-sm text-gray-600">Total:</p>
              <p className="text-lg font-bold text-red-600">
                ${calculateTotalPrice().toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              Add to Cart - ${calculateTotalPrice().toFixed(2)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
