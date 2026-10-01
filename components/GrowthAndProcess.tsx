import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import {
  LuArrowRight,
  LuCheck,
  LuLeaf,
  LuSalad,
  LuSignal,
  LuStar,
  LuTruck,
  LuUser,
} from "react-icons/lu";

const ICON_COLOR = "#3E5A2E";

const CARD_SHADOW = "shadow-[0_4px_18px_rgba(20,50,35,0.06)]";
const CARD_SHADOW_HOVER = "hover:shadow-[0_12px_28px_rgba(20,50,35,0.14)]";

/**
 * Dono sections ka container same hai taake left/right edges ek seedh mein aayein
 * (pehle Plans aur Process ka padding alag alag tha).
 */
const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12";

const PLANS = [
  {
    name: "Essential Plan",
    description: "Great for individuals starting their healthy journey.",
    price: "AED 299",
    Icon: LuLeaf,
    popular: false,
    features: ["Fresh daily meals", "Balanced nutrition", "Flexible delivery"],
  },
  {
    name: "Balanced Plan",
    description: "Our best value plan for a healthier lifestyle.",
    price: "AED 499",
    Icon: LuStar,
    popular: true,
    features: [
      "Customized meal options",
      "Wide variety of meals",
      "Nutritionist support",
      "Flexible delivery",
    ],
  },
  {
    name: "Performance Plan",
    description: "For fitness enthusiasts and active lifestyles.",
    price: "AED 699",
    Icon: LuSignal,
    popular: false,
    features: [
      "High-protein meals",
      "Performance-focused nutrition",
      "Personalized plans",
      "Priority support",
    ],
  },
];

const STEPS = [
  {
    number: "1",
    title: "Choose Your Plan",
    description: "Select the meal plan that fits your goals.",
    Icon: LuUser,
  },
  {
    number: "2",
    title: "We Prepare Fresh Meals",
    description: "Our chefs prepare nutritious meals with care.",
    Icon: LuSalad,
  },
  {
    number: "3",
    title: "Enjoy Convenient Delivery",
    description: "Receive your meals and enjoy a healthier you.",
    Icon: LuTruck,
  },
];

export default function PlansAndProcess() {
  return (
    <View className="w-full">
      {/* ───────────── Growth Plans ───────────── */}
      <View className="w-full bg-white">
        <View className={`${CONTAINER} py-5 sm:py-6 lg:py-5`}>
          {/* Header: mobile stack, sm+ row */}
          <View className="flex-col items-start gap-2.5 sm:flex-row sm:items-end sm:justify-between">
            <View className="w-full flex-1 sm:w-auto sm:pr-4">
              <Text className="font-inter-semibold text-[12px] uppercase tracking-[2px] text-[#6B7A4A]">
                Growth Plans
              </Text>

              <Text className="font-lora-semibold mt-1.5 text-[26px] leading-[32px] text-[#173B32] min-[380px]:text-[28px] min-[380px]:leading-[34px] sm:text-[30px] sm:leading-[37px] md:text-[34px] md:leading-[41px] lg:text-[35px] lg:leading-[42px]">
                Find the Perfect Plan for You
              </Text>
            </View>

            <Pressable
              className="group shrink-0 flex-row items-center pb-1"
              accessibilityRole="link"
              accessibilityLabel="View All Plans"
            >
              <Text className="font-inter-semibold text-[12px] text-[#6B7A4A] transition-colors duration-300 group-hover:text-[#3B5228]">
                View All Plans
              </Text>

              <LuArrowRight
                size={15}
                strokeWidth={2}
                color="#6B7A4A"
                style={{ marginLeft: 6 }}
              />
            </Pressable>
          </View>

          {/* Plan Cards: 1 col → 2 cols (sm) → 4 cols (lg) */}
          <View className="-mx-2 mt-3 flex-row flex-wrap items-stretch">
            {PLANS.map(
              ({ name, description, price, Icon, popular, features }) => (
                <View key={name} className="w-full p-2 sm:w-1/2 lg:w-1/4">
                  <View
                    className={`relative h-full min-h-[305px] overflow-hidden rounded-[15px] border border-[#E3E6DC] bg-[#FBFBF8] transition-all duration-300 hover:-translate-y-1.5 ${CARD_SHADOW} ${CARD_SHADOW_HOVER}`}
                  >
                    {/* Most Popular */}
                    {popular && (
                      <View className="w-full flex-row items-center justify-center bg-[#667D36] py-1.5">
                        <Text className="font-inter-semibold text-[10px] uppercase tracking-[1.5px] text-white">
                          Most Popular
                        </Text>

                        <LuStar
                          size={11}
                          color="#FFFFFF"
                          fill="#FFFFFF"
                          style={{ marginLeft: 5 }}
                        />
                      </View>
                    )}

                    <View className="flex-1 px-5 pb-5 pt-4">
                      {/* Icon + Title */}
                      <View className="flex-row items-start">
                        <View
                          className={`h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            popular ? "bg-[#E3E8D6]" : "bg-[#EEF1E5]"
                          }`}
                        >
                          <Icon
                            size={popular ? 21 : 27}
                            strokeWidth={1.5}
                            color={ICON_COLOR}
                            fill={popular ? "#667D36" : "none"}
                          />
                        </View>

                        <View className="ml-3 flex-1">
                          <Text className="font-lora-semibold text-[17px] leading-[21px] text-[#173B32]">
                            {name}
                          </Text>

                          <Text className="font-inter mt-1.5 text-[12px] leading-[18px] text-[#59645C]">
                            {description}
                          </Text>
                        </View>
                      </View>

                      {/* Price */}
                      <View className="mt-4 flex-row items-baseline">
                        <Text className="font-lora-semibold text-[19px] text-[#173B32]">
                          {price}
                        </Text>

                        <Text className="font-inter-medium ml-1 text-[11px] text-[#59645C]">
                          / month
                        </Text>
                      </View>

                      {/* Features (lamba text wrap ho jata hai) */}
                      <View className="mt-4 flex-1">
                        {features.map((feature) => (
                          <View
                            key={feature}
                            className="mb-2 flex-row items-start"
                          >
                            <View className="mt-[2px]">
                              <LuCheck
                                size={14}
                                strokeWidth={2.5}
                                color={ICON_COLOR}
                              />
                            </View>

                            <Text className="font-inter ml-2.5 flex-1 text-[12.5px] leading-[18px] text-[#3F4A42]">
                              {feature}
                            </Text>
                          </View>
                        ))}
                      </View>

                      {/* Button */}
                      <Pressable
                        className="group mt-4 items-center rounded-full border border-[#173B32] bg-white py-2.5 transition-all duration-300 hover:border-[#3B5228] hover:bg-[#3B5228] hover:shadow-md"
                        accessibilityRole="button"
                        accessibilityLabel={`Get started with ${name}`}
                      >
                        <Text className="font-inter-semibold text-[12.5px] text-[#173B32] transition-colors duration-300 group-hover:text-white">
                          Get Started
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              )
            )}

            {/* ───────────── 4th Image Card ───────────── */}
            <View className="w-full p-2 sm:w-1/2 lg:w-1/4">
              <Pressable
                className={`group relative h-full min-h-[305px] overflow-hidden rounded-[15px] border border-[#E3E6DC] transition-all duration-500 hover:-translate-y-1.5 ${CARD_SHADOW} ${CARD_SHADOW_HOVER}`}
                accessibilityRole="button"
                accessibilityLabel="Invest in a healthier you"
              >
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85",
                  }}
                  className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                  resizeMode="cover"
                  accessibilityLabel="Healthy diet food"
                />

                {/* Overlay */}
                <View className="absolute inset-0 bg-black/35 transition-colors duration-500 group-hover:bg-black/50" />

                <View className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Content */}
                <View className="flex-1 justify-end p-5">
                  <LuLeaf
                    size={28}
                    strokeWidth={1.3}
                    color="rgba(255,255,255,0.9)"
                  />

                  <Text className="font-lora-semibold mt-2 text-[25px] leading-[30px] text-white">
                    Invest in
                  </Text>

                  <Text className="font-lora-semibold text-[25px] leading-[30px] text-white">
                    a Healthier
                  </Text>

                  <Text className="font-lora-semibold text-[25px] leading-[30px] text-white">
                    You
                  </Text>

                  <View className="mt-2 h-[2px] w-16 bg-white/80 transition-all duration-300 group-hover:w-24" />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      {/* ───────────── Our Process ───────────── */}
      <View className="w-full bg-[#F4F5ED]">
        <View className={`${CONTAINER} py-6 sm:py-7 lg:py-5`}>
          {/* Header */}
          <View className="flex-row items-end justify-between">
            <View className="flex-1 pr-4">
              <Text className="font-inter-semibold text-[12px] uppercase tracking-[2px] text-[#6B7A4A]">
                Our Process
              </Text>

              <Text className="font-lora-semibold mt-1.5 text-[24px] leading-[30px] text-[#173B32] min-[380px]:text-[26px] min-[380px]:leading-[32px] sm:text-[28px] sm:leading-[35px] md:text-[31px] md:leading-[38px] lg:text-[32px] lg:leading-[39px]">
                Healthy Eating in 3 Simple Steps
              </Text>
            </View>

            <Pressable
              className="hidden shrink-0 flex-row items-center pb-1 sm:flex"
              accessibilityRole="link"
              accessibilityLabel="It's easy to get started"
            >
              <Text className="font-inter-semibold text-[12px] text-[#6B7A4A] transition-colors duration-300 hover:text-[#3B5228]">
                It's Easy to Get Started
              </Text>

              <LuArrowRight
                size={14}
                strokeWidth={2}
                color="#6B7A4A"
                style={{ marginLeft: 6 }}
              />
            </Pressable>
          </View>

          {/* Steps
              mobile: har step ek row (number + icon + text)
              md (tablet): 3 columns, har step ke andar text neeche (tang jagah)
              lg+: har step horizontal, beech mein arrows */}
          <View className="mt-4 flex-col md:flex-row md:items-stretch md:justify-between">
            {STEPS.map(({ number, title, description, Icon }, index) => (
              <React.Fragment key={title}>
                {/* Step */}
                <View className="mb-5 flex-row items-center md:mb-0 md:flex-1 md:flex-col md:items-start md:px-2 md:py-3 lg:flex-row lg:items-center lg:px-3">
                  {/* Number + Icon */}
                  <View className="flex-row items-center">
                    <View className="h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DDE3D0] sm:h-12 sm:w-12">
                      <Text className="font-lora-semibold text-[18px] text-[#173B32] sm:text-[19px]">
                        {number}
                      </Text>
                    </View>

                    <View className="ml-3 shrink-0 sm:ml-4">
                      <Icon size={30} strokeWidth={1.4} color={ICON_COLOR} />
                    </View>
                  </View>

                  {/* Text */}
                  <View className="ml-3 flex-1 sm:ml-4 md:ml-0 md:mt-3 lg:ml-4 lg:mt-0">
                    <Text className="font-lora-semibold text-[15px] leading-[20px] text-[#173B32]">
                      {title}
                    </Text>

                    <Text className="font-inter mt-1 text-[12px] leading-[18px] text-[#59645C]">
                      {description}
                    </Text>
                  </View>
                </View>

                {/* Connector (md+) */}
                {index < STEPS.length - 1 && (
                  <View className="hidden items-center justify-center px-2 md:flex lg:px-3">
                    <LuArrowRight
                      size={18}
                      strokeWidth={1.8}
                      color="#59645C"
                    />
                  </View>
                )}
              </React.Fragment>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}