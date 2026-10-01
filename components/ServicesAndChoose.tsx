import React from "react";
import { Image, Pressable, Text, View } from "react-native";

import {
  LuArrowRight,
  LuGem,
  LuHeart,
  LuLeaf,
  LuTruck,
} from "react-icons/lu";

const ICON_COLOR = "#3E5A2E";

/**
 * Dono sections ka container padding same rakha hai taake left/right edges
 * ek seedh mein aayein. Badalna ho toh sirf is ek constant ko badlein.
 */
const CONTAINER = "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12";

const SERVICES = [
  {
    title: "Healthy Ready-To-Eat Meals",
    description: "Fresh, balanced meals prepared daily and ready to enjoy.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Customized Meal Plans",
    description: "Personalized nutrition plans designed for your goals.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Weight Management Plans",
    description:
      "Delicious meals to support your weight loss or maintenance journey.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "High-Protein Meal Plans",
    description:
      "Nutrient-rich meals for active lifestyles and fitness goals.",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=85",
  },
];

const ADVANTAGES = [
  {
    title: "Premium Quality",
    description: "High-quality, fresh Ingredients",
    Icon: LuGem,
  },
  {
    title: "Health Focused",
    description: "Nutritionist designed meals",
    Icon: LuHeart,
  },
  {
    title: "Convenient Delivery",
    description: "To your home or office",
    Icon: LuTruck,
  },
  {
    title: "Flexible Plans",
    description: "Options for every dietary need",
    Icon: LuLeaf,
  },
];

export default function ServicesAndAdvantages() {
  return (
    <View className="w-full">
      {/* ───────────── Our Services ───────────── */}
      <View className="w-full bg-[#F8F8F2]">
        <View className={`${CONTAINER} py-8 sm:py-9 lg:py-10`}>
          {/* Header: mobile par stack, sm+ par row */}
          <View className="flex-col items-start gap-2.5 sm:flex-row sm:items-end sm:justify-between">
            <View className="w-full flex-1 sm:w-auto sm:pr-4">
              <Text className="font-inter-semibold text-[12px] uppercase tracking-[1.5px] text-[#6B7A4A] sm:text-[13px] lg:text-[14px]">
                Our Services
              </Text>

              <Text className="font-lora-semibold mt-1 text-[26px] leading-[32px] text-[#173B32] sm:text-[30px] sm:leading-[36px] md:text-[32px] md:leading-[38px] lg:text-[34px] lg:leading-[40px]">
                Healthy Meal Plans for Every Lifestyle
              </Text>
            </View>

            <Pressable
              className="group shrink-0 flex-row items-center pb-0.5"
              accessibilityRole="link"
              accessibilityLabel="View All Services"
            >
              <Text className="font-inter-semibold text-[12px] text-[#6B7A4A] transition-colors duration-200 group-hover:text-[#3B5228] sm:text-[13px]">
                View All Services
              </Text>

              <LuArrowRight
                size={14}
                strokeWidth={2}
                color="#6B7A4A"
                style={{ marginLeft: 5 }}
              />
            </Pressable>
          </View>

          {/* Service Cards: 1 col → 2 cols (sm) → 4 cols (lg) */}
          <View className="-mx-1.5 mt-3 flex-row flex-wrap items-stretch">
            {SERVICES.map(({ title, description, image }) => (
              <View
                key={title}
                className="w-full px-1.5 py-2 sm:w-1/2 lg:w-1/4"
              >
                <Pressable
                  className="group relative h-full w-full overflow-hidden rounded-[12px] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  accessibilityRole="button"
                  accessibilityLabel={title}
                >
                  {/* Image: mobile par ratio, sm+ par fixed height */}
                  <View className="aspect-[16/10] w-full overflow-hidden sm:aspect-auto sm:h-[140px] md:h-[145px]">
                    <Image
                      source={{ uri: image }}
                      className="h-full w-full transition-transform duration-300 group-hover:scale-[1.02]"
                      resizeMode="cover"
                      accessibilityLabel={title}
                    />
                  </View>

                  {/* Card Content */}
                  <View className="flex-1 justify-between px-4 pb-4 pt-3.5">
                    <View>
                      <Text className="font-lora-semibold text-[16px] leading-[20px] text-[#173B32]">
                        {title}
                      </Text>

                      <Text className="font-inter mt-1.5 min-h-[38px] max-w-[94%] text-[12px] leading-[18px] text-[#59645C]">
                        {description}
                      </Text>
                    </View>

                    {/* Arrow */}
                    <View className="mt-3 items-end">
                      <View className="group/arrow h-7 w-7 items-center justify-center rounded-full border border-[#C9CFB8] bg-[#E3E8D6] transition-all duration-200 hover:border-[#3B5228] hover:bg-[#3B5228]">
                        <LuArrowRight
                          size={13}
                          strokeWidth={2}
                          className="text-[#2F4A22] transition-colors duration-200 group-hover/arrow:text-white"
                        />
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* ───────────── Why Choose Healthify ───────────── */}
      <View className="w-full bg-[#EEF1E5]">
        <View className={`${CONTAINER} py-8 sm:py-9 lg:py-6`}>
          <View className="flex-col lg:flex-row lg:items-center">
            {/* ───────────── Left Content ───────────── */}
            <View className="w-full lg:w-[40%] lg:pr-10 xl:pr-14">
              <Text className="font-inter-semibold text-[11px] uppercase tracking-[1.4px] text-[#6B7A4A]">
                Our Advantages
              </Text>

              <Text className="font-lora-semibold mt-2 text-[28px] leading-[35px] text-[#173B32] min-[380px]:text-[32px] min-[380px]:leading-[39px] sm:text-[34px] sm:leading-[42px] md:text-[38px] md:leading-[46px]">
                Why Choose Healthify
              </Text>

              <Text className="font-inter mt-3 max-w-[440px] text-[14px] leading-[22px] text-[#59645C] sm:mt-4 sm:text-[15px] sm:leading-[23px]">
                More than just meals — we deliver a healthier, happier you
                with benefits that fit your lifestyle.
              </Text>

              {/* CTA */}
              <Pressable
                className="group mt-6 flex-row items-center self-start rounded-[9px] bg-[#3B5228] px-6 py-3.5 transition-all duration-200 hover:bg-[#29401D] hover:shadow-md sm:mt-7"
                accessibilityRole="button"
                accessibilityLabel="Discover All Advantages"
              >
                <Text className="font-inter-medium text-[14px] text-white">
                  Discover All Advantages
                </Text>

                <LuArrowRight
                  size={16}
                  strokeWidth={2}
                  color="#FFFFFF"
                  style={{ marginLeft: 8 }}
                />
              </Pressable>
            </View>

            {/* ───────────── Right Advantage Cards ───────────── */}
            <View className="mt-7 w-full lg:mt-0 lg:w-[60%]">
              {/* 2 cols (mobile) → 4 cols (md+) */}
              <View className="-mx-1.5 flex-row flex-wrap items-stretch sm:-mx-2">
                {ADVANTAGES.map(({ title, description, Icon }) => (
                  <View
                    key={title}
                    className="w-1/2 px-1.5 py-1.5 sm:px-2 sm:py-2 md:w-1/4"
                  >
                    <View className="group h-full min-h-[145px] w-full items-center justify-center rounded-[14px] bg-[#F7F8F2] px-3 py-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:min-h-[155px] sm:px-4">
                      <Icon size={30} strokeWidth={1.5} color={ICON_COLOR} />

                      <Text className="font-lora-semibold mt-3 text-center text-[13px] leading-[18px] text-[#173B32] sm:text-[14px] sm:leading-[19px]">
                        {title}
                      </Text>

                      <Text className="font-inter mt-1.5 text-center text-[11.5px] leading-[16px] text-[#59645C] sm:text-[12px] sm:leading-[17px]">
                        {description}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}