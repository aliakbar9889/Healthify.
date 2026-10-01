import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { LuArrowRight, LuMinus, LuPlus, LuStar } from "react-icons/lu";

const CARD_SHADOW = "shadow-[0_4px_18px_rgba(20,50,35,0.06)]";
const CARD_SHADOW_HOVER = "hover:shadow-[0_10px_24px_rgba(20,50,35,0.12)]";

/**
 * Dono sections ka container same hai taake left/right edges ek seedh mein aayein.
 */
const CONTAINER = "mx-auto w-full max-w-6xl px-4 sm:px-6";

const REVIEWS = [
  {
    quote:
      "Healthify has completely changed my eating habits. The meals are delicious, fresh, and so convenient!",
    name: "Sara M.",
    location: "Dubai, UAE",
    avatar: {
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=85",
    },
    rating: 5,
  },
  {
    quote:
      "Finally a healthy meal service that tastes amazing! It fits perfectly into my busy lifestyle.",
    name: "Ahmed R.",
    location: "Dubai, UAE",
    avatar: {
      uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85",
    },
    rating: 5,
  },
  {
    quote:
      "Great quality, variety, and customer service. I feel healthier and more energized every day.",
    name: "Fatima K.",
    location: "Dubai, UAE",
    avatar: {
      uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=85",
    },
    rating: 5,
  },
];

const FAQS = [
  {
    question: "What are your meal plans?",
    answer:
      "We offer three plans: Essential, Balanced and Performance. Each one includes fresh daily meals designed by nutritionists, so you can pick the plan that fits your goals and budget.",
  },
  {
    question: "How does delivery work?",
    answer:
      "Your meals are freshly prepared each day and delivered to your home or office within your chosen time slot. You can pause, skip or reschedule deliveries whenever you need.",
  },
  {
    question: "Can I customize my meals?",
    answer:
      "Yes. The Balanced and Performance plans let you choose from a wide variety of meals, and you can tell us about allergies or dietary preferences so we can tailor your menu.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit and debit cards, as well as secure online payments. Subscription plans are billed monthly and you can update your payment method any time.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "Yes, you can manage your plan, track deliveries and update your preferences from our mobile app, as well as from the website.",
  },
];

export default function ReviewsAndFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <View className="w-full">
      {/* ───────────── Customer Stories ───────────── */}
      <View className="w-full bg-white">
        <View className={`${CONTAINER} py-6 sm:py-7 lg:py-6`}>
          {/* Header */}
          <View className="flex-row items-end justify-between">
            <View className="flex-1 pr-3">
              <Text className="font-inter-semibold text-[12px] uppercase tracking-[2px] text-[#6B7A4A] sm:text-[13px]">
                Customer Stories
              </Text>

              <Text className="font-lora-semibold mt-1 text-[26px] leading-[32px] text-[#173B32] min-[380px]:text-[29px] min-[380px]:leading-[35px] sm:text-[32px] sm:leading-[39px] md:text-[35px] md:leading-[42px] lg:text-[36px] lg:leading-[43px]">
                What Our Customers Say
              </Text>
            </View>

            {/* Desktop/Tablet link (sm+) */}
            <Pressable
              className="hidden shrink-0 flex-row items-center pb-1 sm:flex"
              accessibilityRole="link"
              accessibilityLabel="View More Reviews"
            >
              <Text className="font-inter-semibold text-[13px] text-[#6B7A4A] transition-colors duration-300 hover:text-[#3B5228]">
                View More Reviews
              </Text>

              <LuArrowRight
                size={16}
                strokeWidth={2}
                color="#6B7A4A"
                style={{ marginLeft: 6 }}
              />
            </Pressable>
          </View>

          {/* Review Cards: mobile/tablet 1 column → lg 3 columns */}
          <View className="-mx-2 mt-3 flex-row flex-wrap items-stretch">
            {REVIEWS.map(({ quote, name, location, avatar, rating }) => (
              <View key={name} className="w-full p-2 lg:w-1/3">
                <View
                  className={`h-full min-h-[165px] justify-between rounded-[15px] border border-[#E3E6DC] bg-[#FBFBF8] px-4 py-4 transition-all duration-300 hover:-translate-y-1 sm:min-h-[170px] sm:px-5 ${CARD_SHADOW} ${CARD_SHADOW_HOVER}`}
                >
                  {/* Message */}
                  <Text className="font-inter-medium text-[14.5px] leading-[22px] text-[#3F4A42] sm:text-[15px] sm:leading-[23px] lg:text-[15.5px]">
                    “{quote}”
                  </Text>

                  {/* Customer Row (flex-wrap: tang jagah par stars neeche aa jate hain) */}
                  <View className="mt-3 flex-row flex-wrap items-center justify-between gap-y-2">
                    {/* Left */}
                    <View className="flex-row items-center">
                      <Image
                        source={avatar}
                        className="h-10 w-10 rounded-full sm:h-11 sm:w-11"
                        resizeMode="cover"
                        accessibilityLabel={`${name} profile photo`}
                      />

                      <View className="ml-2.5">
                        <Text className="font-inter-semibold text-[13.5px] text-[#173B32] sm:text-[14px]">
                          {name}
                        </Text>

                        <Text className="font-inter mt-0.5 text-[11.5px] text-[#59645C] sm:text-[12px]">
                          {location}
                        </Text>
                      </View>
                    </View>

                    {/* Right - Stars */}
                    <View
                      className="shrink-0 flex-row items-center"
                      accessibilityLabel={`${rating} out of 5 stars`}
                    >
                      {Array.from({ length: rating }).map((_, i) => (
                        <LuStar
                          key={i}
                          size={15}
                          strokeWidth={1.8}
                          color="#F5A623"
                          fill="#F5A623"
                          style={{ marginLeft: i === 0 ? 0 : 2 }}
                        />
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

          {/* Mobile View More (< sm) */}
          <Pressable
            className="mt-3 flex-row items-center self-center sm:hidden"
            accessibilityRole="link"
            accessibilityLabel="View More Reviews"
          >
            <Text className="font-inter-semibold text-[13px] text-[#6B7A4A]">
              View More Reviews
            </Text>

            <LuArrowRight
              size={15}
              strokeWidth={2}
              color="#6B7A4A"
              style={{ marginLeft: 5 }}
            />
          </Pressable>
        </View>
      </View>

      {/* ───────────── FAQ ───────────── */}
      <View className="w-full bg-[#F1F2EC]">
        {/* mobile: stack  |  md+: left content + right accordion side by side */}
        <View
          className={`${CONTAINER} flex-col py-6 sm:py-7 md:flex-row md:items-start lg:py-6`}
        >
          {/* Left */}
          <View className="w-full md:w-1/2 md:pr-6 lg:pr-8">
            <Text className="font-inter-semibold text-[12px] uppercase tracking-[2px] text-[#6B7A4A] sm:text-[13px]">
              Frequently Asked Questions
            </Text>

            <Text className="font-lora-semibold mt-1 text-[28px] leading-[34px] text-[#173B32] min-[380px]:text-[30px] min-[380px]:leading-[36px] sm:text-[32px] sm:leading-[39px] md:text-[32px] md:leading-[39px] lg:text-[34px] lg:leading-[41px]">
              Have Questions?
            </Text>

            <Text className="font-lora-semibold text-[28px] leading-[34px] text-[#173B32] min-[380px]:text-[30px] min-[380px]:leading-[36px] sm:text-[32px] sm:leading-[39px] md:text-[32px] md:leading-[39px] lg:text-[34px] lg:leading-[41px]">
              We've Got Answers.
            </Text>

            <Text className="font-inter mt-2 max-w-[420px] text-[14px] leading-[21px] text-[#59645C] sm:text-[14.5px] sm:leading-[22px]">
              Find quick answers to common questions about our meal plans,
              delivery, and more.
            </Text>

            <Pressable
              className="mt-4 flex-row items-center self-start rounded-[10px] bg-[#3B5228] px-5 py-2.5 transition-colors duration-300 hover:bg-[#667D36]"
              accessibilityRole="button"
              accessibilityLabel="View All FAQs"
            >
              <Text className="font-inter-semibold text-[13px] text-white">
                View All FAQs
              </Text>

              <LuArrowRight
                size={16}
                strokeWidth={2}
                color="#FFFFFF"
                style={{ marginLeft: 7 }}
              />
            </Pressable>
          </View>

          {/* Right - Accordion */}
          <View className="mt-5 w-full md:mt-0 md:w-1/2">
            {FAQS.map(({ question, answer }, index) => {
              const isOpen = openIndex === index;

              return (
                <View
                  key={question}
                  className={`mb-1.5 overflow-hidden rounded-[10px] bg-[#FAFAF6] transition-shadow duration-300 hover:shadow-[0_4px_14px_rgba(20,50,35,0.08)] ${
                    isOpen ? "shadow-[0_4px_14px_rgba(20,50,35,0.08)]" : ""
                  }`}
                >
                  <Pressable
                    onPress={() => toggle(index)}
                    className="flex-row items-center justify-between px-4 py-3 sm:px-5"
                    accessibilityRole="button"
                    accessibilityLabel={question}
                    accessibilityState={{ expanded: isOpen }}
                  >
                    <Text className="font-inter-semibold flex-1 pr-3 text-[14.5px] leading-[20px] text-[#2D3A32] sm:text-[15.5px] sm:leading-[21px]">
                      {question}
                    </Text>

                    {isOpen ? (
                      <LuMinus size={18} strokeWidth={2} color="#3E5A2E" />
                    ) : (
                      <LuPlus size={18} strokeWidth={2} color="#3E5A2E" />
                    )}
                  </Pressable>

                  {isOpen && (
                    <View className="px-4 pb-3 sm:px-5 sm:pb-3.5">
                      <Text className="font-inter text-[13.5px] leading-[20px] text-[#59645C] sm:text-[14px] sm:leading-[21px]">
                        {answer}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}