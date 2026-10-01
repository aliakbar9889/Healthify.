import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import { FaAppleAlt, FaStethoscope, FaTruck } from "react-icons/fa";

const FEATURES = [
  { label: "Fresh Ingredients", Icon: FaAppleAlt },
  { label: "Nutritionist Approved", Icon: FaStethoscope },
  { label: "Delivered to Your Door", Icon: FaTruck },
];

export default function Hero() {
  return (
    <View className="hero-gradient w-full overflow-hidden">
      <View className="mx-auto w-full max-w-7xl flex-col items-center px-4 py-6 sm:px-6 sm:py-8 md:flex-row md:py-5 lg:px-8 lg:py-6">

        {/* ───────────── Left Content ───────────── */}
        <View className="w-full md:w-[55%] md:pr-7 lg:translate-x-10 lg:pr-10 xl:translate-x-14">

          {/* Main Heading */}
          <Text className="font-lora-bold text-[38px] leading-[1.05] text-[#173B32] min-[400px]:text-[43px] sm:text-[47px] md:text-[45px] lg:text-[51px] xl:text-[54px]">
            Healthy Meals
          </Text>

          <Text className="font-lora-bold text-[38px] leading-[1.05] text-[#657B36] min-[400px]:text-[43px] sm:text-[47px] md:text-[45px] lg:text-[51px] xl:text-[54px]">
            Happier Lives
          </Text>

          {/* Subtitle */}
          <Text className="font-inter-medium mt-3 max-w-[480px] text-[16px] leading-[24px] text-[#59645C] sm:text-[18px] sm:leading-[25px] md:text-[18px]">
            Fresh. Nutritious. Convenient. Delivered to you.
          </Text>

          {/* Description */}
          <Text className="font-inter mt-2 max-w-[480px] text-[14px] leading-[21px] text-[#606861] sm:text-[15px] sm:leading-[22px]">
            Enjoy thoughtfully prepared meals made with fresh ingredients and
            balanced nutrition, delivered conveniently to support a healthier
            and happier lifestyle every day.
          </Text>

          {/* CTA Buttons */}
          <View className="mt-5 flex-row flex-wrap items-center gap-2.5 md:mt-4">

            {/* Primary Button */}
            <Pressable
              className="flex-row items-center rounded-[10px] bg-[#123C2F] px-[18px] py-[10px] transition-all duration-200 hover:bg-[#0C2B21] hover:shadow-md sm:px-5 sm:py-2.5"
              accessibilityRole="button"
              accessibilityLabel="Explore Meal Plans"
            >
              <Text className="font-inter-semibold text-[14px] text-white sm:text-[14.5px]">
                Explore Meal Plans
              </Text>

              <Text className="ml-2.5 text-[17px] text-white">→</Text>
            </Pressable>

            {/* Secondary Button */}
            <Pressable
              className="flex-row items-center rounded-[10px] border border-[#C9CEC3] bg-white px-[18px] py-[10px] transition-all duration-200 hover:border-[#123C2F] hover:bg-[#F7F8F3] hover:shadow-md sm:px-5 sm:py-2.5"
              accessibilityRole="button"
              accessibilityLabel="Learn More"
            >
              <Text className="font-inter-semibold text-[14px] text-[#4D584D] sm:text-[14.5px]">
                Learn More
              </Text>
            </Pressable>

          </View>

          {/* Trust Features */}
          <View className="mt-5 flex-row flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-x-5 md:mt-4">
            {FEATURES.map(({ label, Icon }) => (
              <View key={label} className="flex-row items-center">
                <Icon size={16} color="#697269" />

                <Text className="font-inter-medium ml-1.5 text-[12.5px] text-[#697269] sm:text-[13px]">
                  {label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* ───────────── Right Visual ───────────── */}
        <View className="mt-6 w-full md:mt-0 md:w-[45%] md:pl-4 lg:pl-6">

          {/* Mobile/Tablet: aspect ratio se height khud scale hoti hai
              md+: aapki original fixed heights (320 / 350 / 380) */}
          <View className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[18px] sm:aspect-[16/9] md:aspect-auto md:h-[320px] lg:h-[350px] xl:h-[380px]">

            {/* Image */}
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
              }}
              className="absolute inset-0 h-full w-full transition-transform duration-700 hover:scale-105"
              resizeMode="cover"
              accessibilityLabel="Fresh healthy meal with vegetables"
            />

            {/* Soft Overlay */}
            <View
              pointerEvents="none"
              className="absolute inset-0 bg-[#173B32]/10"
            />

            {/* Bottom Badge */}
            <View className="absolute bottom-3 right-3 flex-row items-center rounded-[13px] bg-white/95 px-3 py-2.5 shadow-lg sm:bottom-4 sm:right-4 sm:px-4 sm:py-3">
              <View className="mr-2.5 h-8 w-8 items-center justify-center rounded-full bg-[#E8EEE0] sm:h-9 sm:w-9">
                <FaAppleAlt size={15} color="#657B36" />
              </View>

              <View>
                <Text className="font-inter-semibold text-[11.5px] text-[#173B32] sm:text-[12.5px]">
                  Nutritious Meals
                </Text>

                <Text className="font-inter mt-0.5 text-[9.5px] text-[#606861] sm:text-[10.5px]">
                  Fresh ingredients daily
                </Text>
              </View>
            </View>

          </View>
        </View>

      </View>
    </View>
  );
}