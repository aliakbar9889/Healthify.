import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import {
  LuArrowRight,
  LuLeaf,
  LuSalad,
  LuSmile,
  LuSoup,
  LuStar,
  LuUsers,
  LuUtensilsCrossed,
} from "react-icons/lu";

const STATS = [
  { value: "1M+", label: "Meals Delivered", Icon: LuUtensilsCrossed },
  { value: "30K+", label: "Happy Customers", Icon: LuLeaf },
  { value: "4.8/5", label: "Customer Satisfaction", Icon: LuStar },
  { value: "550+", label: "Corporate Clients", Icon: LuUsers },
];

const FEATURES = [
  { label: "Freshly Prepared Daily", Icon: LuSoup },
  { label: "Balanced Nutrition", Icon: LuSalad },
  { label: "Great Taste", Icon: LuSmile },
];

const ICON_COLOR = "#3E5A2E";

export default function AboutSection() {
  return (
    <View className="w-full">
      {/* ───────────── Stats ───────────── */}
      <View className="w-full bg-[#F1F2EC]">
        <View className="mx-auto w-full max-w-7xl flex-row flex-wrap px-4 py-3 sm:px-6 md:px-8 md:py-4 lg:py-5">
          {STATS.map(({ value, label, Icon }, index) => (
            <View
              key={label}
              className={`w-1/2 flex-row items-center justify-center px-1 py-3 md:w-1/4 md:py-1 ${
                index !== 0 ? "md:border-l md:border-[#D5D9CF]" : ""
              }`}
            >
              <Icon
                size={27}
                strokeWidth={1.5}
                color={ICON_COLOR}
                style={{ flexShrink: 0 }}
              />

              <View className="ml-2 shrink sm:ml-2.5">
                <Text className="font-lora-bold text-[19px] leading-[23px] text-[#173B32] sm:text-[21px] sm:leading-[25px] md:text-[23px]">
                  {value}
                </Text>

                <Text className="font-inter text-[9.5px] leading-[14px] text-[#59645C] sm:text-[10px] md:text-[11px]">
                  {label}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* ───────────── About Section ───────────── */}
      <View className="relative w-full overflow-hidden bg-[#FBFBF8]">
        {/* Decorative Leaf (sirf lg+) */}
        <View
          pointerEvents="none"
          className="absolute -right-12 top-1/2 hidden -translate-y-1/2 opacity-[0.07] lg:flex"
        >
          <LuLeaf size={300} strokeWidth={1} color="#657B36" />
        </View>

        {/* Main Container: mobile stack, md+ side by side */}
        <View className="mx-auto w-full max-w-7xl flex-col items-center px-4 py-8 sm:px-6 sm:py-10 md:flex-row md:px-8 md:py-9 lg:py-10">

          {/* ───────────── Left – Image ───────────── */}
          <View className="w-full md:w-1/2 md:pr-6 lg:pr-10">
            <View className="relative mx-auto aspect-[16/10] w-full max-w-[600px] overflow-hidden rounded-[16px] sm:aspect-[16/9]">

              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
                }}
                className="absolute inset-0 h-full w-full transition-transform duration-700 hover:scale-105"
                resizeMode="cover"
                accessibilityLabel="Fresh healthy meal with vegetables"
              />

              {/* Soft Overlay */}
              <View
                pointerEvents="none"
                className="absolute inset-0 bg-[#173B32]/5"
              />

              {/* Floating Card */}
              <View className="absolute bottom-3 left-3 flex-row items-center rounded-[13px] bg-[#F3F4ED]/95 px-3 py-2.5 shadow-lg sm:bottom-4 sm:left-4 sm:px-3.5 md:bottom-5 md:left-5 md:px-4 md:py-3">
                <LuLeaf size={22} strokeWidth={1.5} color={ICON_COLOR} />

                <View className="ml-2 sm:ml-2.5">
                  <Text className="font-lora-semibold text-[11px] leading-[15px] text-[#173B32] sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px]">
                    Nourishing
                  </Text>

                  <Text className="font-lora-semibold text-[11px] leading-[15px] text-[#173B32] sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px]">
                    Lives Daily
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* ───────────── Right – Content ───────────── */}
          <View className="mt-7 w-full md:mt-0 md:w-1/2 md:pl-5 lg:pl-8">
            <Text className="font-inter text-[10px] uppercase tracking-[1.8px] text-[#6B7A4A] sm:text-[11px]">
              About Healthify
            </Text>

            <Text className="font-lora-semibold mt-2 text-[26px] leading-[33px] text-[#173B32] min-[380px]:text-[27px] min-[380px]:leading-[34px] sm:text-[30px] sm:leading-[37px] md:text-[32px] md:leading-[39px] lg:text-[37px] lg:leading-[43px] xl:text-[40px] xl:leading-[46px]">
              Your Trusted Healthy{"\n"}Food Partner
            </Text>

            <Text className="font-inter mt-3 max-w-[500px] text-[13px] leading-[20px] text-[#59645C] sm:text-[14px] sm:leading-[22px]">
              At Healthify, we believe healthy eating should be convenient,
              affordable, and enjoyable. Based in Dubai, we prepare fresh,
              balanced meals using high-quality ingredients to help individuals
              and families achieve their health goals without sacrificing taste.
            </Text>

            {/* Features */}
            <View className="mt-5 flex-row flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-5">
              {FEATURES.map(({ label, Icon }) => (
                <View key={label} className="flex-row items-center">
                  <Icon size={20} strokeWidth={1.5} color={ICON_COLOR} />

                  <Text className="font-inter ml-2 text-[11px] text-[#173B32] sm:text-[12px]">
                    {label}
                  </Text>
                </View>
              ))}
            </View>

            {/* Button */}
            <Pressable
              className="mt-5 flex-row items-center self-start rounded-[10px] bg-[#3B5228] px-5 py-3 transition-all duration-300 hover:bg-[#29401D] hover:shadow-md"
              accessibilityRole="button"
              accessibilityLabel="More About Us"
            >
              <Text className="font-inter-medium text-[12px] text-white sm:text-[13px]">
                More About Us
              </Text>

              <LuArrowRight
                size={14}
                strokeWidth={2}
                color="#FFFFFF"
                style={{ marginLeft: 7 }}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}