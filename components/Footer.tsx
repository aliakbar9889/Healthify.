import React from "react";
import {
  ImageBackground,
  Linking,
  Pressable,
  Text,
  View,
} from "react-native";
import { LuArrowRight, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Our Services",
  "Advantages",
  "Growth Plans",
  "Blogs",
  "Contact Us",
];

const SERVICES = [
  "Healthy ready-to-eat meals",
  "Customized meal plans",
  "Weight management meal",
  "High-protein meal plans",
  "Corporate meal solutions",
  "Fitness and wellness nutrition",
  "Healthy snacks and beverages",
  "Delivery and pickup services",
];

const SOCIALS = [
  {
    label: "Facebook",
    Icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    label: "X",
    Icon: FaXTwitter,
    url: "https://x.com",
  },
  {
    label: "Instagram",
    Icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    label: "YouTube",
    Icon: FaYoutube,
    url: "https://youtube.com",
  },
];

const CONTACTS = [
  {
    label: "Dubai, UAE",
    Icon: LuMapPin,
    url: undefined,
  },
  {
    label: "+971 50 262 6144",
    Icon: LuPhone,
    url: "tel:+971502626144",
  },
  {
    label: "info@healthify.ae",
    Icon: LuMail,
    url: "mailto:info@healthify.ae",
  },
];

function FooterLink({ label }: { label: string }) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={label}
      className="mb-2 self-start"
    >
      <Text className="font-inter-medium text-[13px] leading-[18px] text-white/85 transition-colors duration-200 hover:text-[#A9C26B] sm:text-[13.5px] sm:leading-[19px]">
        {label}
      </Text>
    </Pressable>
  );
}

export default function Footer() {
  return (
    <View className="w-full">
      {/* ───────────── CTA Banner ───────────── */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1800&q=85",
        }}
        resizeMode="cover"
        className="w-full"
        accessibilityLabel="Healthy fresh food background"
      >
        {/* Overlay */}
        <View className="absolute inset-0 bg-[#0F2A20]/45" />

        <View className="mx-auto w-full max-w-6xl flex-col px-5 py-7 sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between lg:px-6 lg:py-9">
          {/* CTA Content */}
          <View className="flex-1 md:pr-8">
            <Text className="font-inter-semibold text-[12px] uppercase tracking-[2px] text-white/90 sm:text-[13px]">
              Ready to Start?
            </Text>

            <Text className="font-lora-semibold mt-1.5 text-[28px] leading-[34px] text-white sm:text-[31px] sm:leading-[38px] md:text-[34px] md:leading-[41px] lg:text-[36px] lg:leading-[43px]">
              Transform Your Health, One Meal At A Time
            </Text>

            <Text className="font-inter-medium mt-2 max-w-[650px] text-[14px] leading-[21px] text-white/95 sm:text-[15px] sm:leading-[22px]">
              Fresh. Nutritious. Convenient. Join thousands of happy
              customers today.
            </Text>
          </View>

          {/* CTA Button */}
          <Pressable
            className="group mt-5 flex-row items-center self-start rounded-[10px] bg-white px-6 py-3.5 transition-all duration-300 hover:bg-[#667D36] hover:shadow-lg md:mt-0 md:self-auto"
            accessibilityRole="button"
            accessibilityLabel="Get Started Today"
          >
            <Text className="font-inter-semibold text-[14px] text-[#173B32] transition-colors duration-300 group-hover:text-white sm:text-[14.5px]">
              Get Started Today
            </Text>

            <LuArrowRight
              size={16}
              strokeWidth={2}
              color="#173B32"
              className="transition-colors duration-300 group-hover:text-white"
              style={{ marginLeft: 8 }}
            />
          </Pressable>
        </View>
      </ImageBackground>

      {/* ───────────── Footer ───────────── */}
      <View className="w-full bg-[#10281F]">
        <View className="mx-auto w-full max-w-6xl px-5 pt-7 sm:px-6 sm:pt-8 lg:px-6 lg:pt-9">
          <View className="-mx-2 flex-row flex-wrap">
            {/* Brand */}
            <View className="w-full p-2 sm:w-1/2 lg:w-[30%]">
              
              {/* Healthify Text Logo */}
              <View className="self-start items-start">
                {/* Arabic - Top */}
              
                         <Text className="font-montserrat-bold text-[32px] tracking-[1.2px] text-white">
                           هيلثيفاي
                         </Text>
               
                         <Text className="font-montserrat-bold mt-[-2px] text-[28px] tracking-tighter text-white">
                           HEALTHIFY
                         </Text>
                      
              </View>

              <Text className="font-inter-medium mt-3 max-w-[290px] text-[13px] leading-[20px] text-white/85 sm:text-[13.5px] sm:leading-[21px]">
                At Healthify, we believe healthy eating should be convenient,
                affordable, and enjoyable.
              </Text>

              {/* Social Links */}
              <View className="mt-4 flex-row flex-wrap items-center">
                {SOCIALS.map(({ label, Icon, url }) => (
                  <Pressable
                    key={label}
                    onPress={() => Linking.openURL(url)}
                    className="mr-2.5 mb-2 h-9 w-9 items-center justify-center rounded-full border border-white/60 transition-all duration-200 hover:border-[#667D36] hover:bg-[#667D36]"
                    accessibilityRole="link"
                    accessibilityLabel={label}
                  >
                    <Icon size={15} color="#FFFFFF" />
                  </Pressable>
                ))}
              </View>
            </View>

            {/* Quick Links */}
            <View className="w-1/2 p-2 sm:w-1/2 lg:w-[20%]">
              <Text className="font-inter-semibold mb-3 text-[15px] text-white sm:text-[16px]">
                Quick Links
              </Text>

              {QUICK_LINKS.map((link) => (
                <FooterLink key={link} label={link} />
              ))}
            </View>

            {/* Our Services */}
            <View className="w-full p-2 sm:w-1/2 lg:w-[28%]">
              <Text className="font-inter-semibold mb-3 text-[15px] text-white sm:text-[16px]">
                Our Services
              </Text>

              <View className="flex-row flex-wrap">
                {SERVICES.map((service) => (
                  <View
                    key={service}
                    className="w-full sm:w-1/2 lg:w-full"
                  >
                    <FooterLink label={service} />
                  </View>
                ))}
              </View>
            </View>

            {/* Get In Touch */}
            <View className="w-full p-2 sm:w-1/2 lg:w-[22%]">
              <Text className="font-inter-semibold mb-3 text-[15px] text-white sm:text-[16px]">
                Get In Touch
              </Text>

              {CONTACTS.map(({ label, Icon, url }) => (
                <Pressable
                  key={label}
                  onPress={() => url && Linking.openURL(url)}
                  className="mb-3 flex-row items-center self-start"
                  accessibilityRole={url ? "link" : "text"}
                  accessibilityLabel={label}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    color="#FFFFFF"
                  />

                  <Text className="font-inter-medium ml-3 text-[13px] leading-[19px] text-white/85 transition-colors duration-200 hover:text-[#A9C26B] sm:text-[13.5px]">
                    {label}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Bottom Bar */}
          <View className="mt-3 flex-col items-start justify-between border-t border-white/20 py-4 sm:flex-row sm:items-center">
            <Text className="font-inter-medium text-[12px] leading-[18px] text-white/80">
              Copyright © 2026 Healthify. All Rights Reserved.
            </Text>

            <View className="mt-2.5 flex-row sm:mt-0">
              <Pressable
                accessibilityRole="link"
                accessibilityLabel="Privacy Policy"
              >
                <Text className="font-inter-medium text-[12px] text-white/80 transition-colors duration-200 hover:text-[#A9C26B]">
                  Privacy Policy
                </Text>
              </Pressable>

              <Pressable
                className="ml-5"
                accessibilityRole="link"
                accessibilityLabel="Terms of Service"
              >
                <Text className="font-inter-medium text-[12px] text-white/80 transition-colors duration-200 hover:text-[#A9C26B]">
                  Terms of Service
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}
     
