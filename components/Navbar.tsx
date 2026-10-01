import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Easing, Platform, Pressable, Text, View } from "react-native";
import { LuArrowRight, LuMenu, LuX } from "react-icons/lu";

/**
 * Fonts (global css / tailwind config): font-montserrat-bold, font-montserrat-semibold
 * Install: npm install react-icons   (web only)
 *
 * Smooth scroll ke liye apne sections par nativeID lagayein:
 *   <View nativeID="about"> ... </View>
 * IDs: home, about, services, advantages, plans, blogs, contact
 */

const NAV_HEIGHT = 64;

/**
 * position: fixed ko inline style se diya hai (className "fixed" react-native-web
 * ki default `position: relative` se override ho jaata hai, isliye navbar scroll
 * ke saath nahi chalta tha). Inline style hamesha jeet'ta hai.
 */
const FIXED_TOP = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 1000,
} as any;

const FIXED_FULL = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1100,
} as any;

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Our Services", id: "services" },
  { label: "Advantages", id: "advantages" },
  { label: "Growth Plan", id: "plans" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact Us", id: "contact" },
];

function Logo({ onPress }: { onPress?: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="items-center justify-center"
      accessibilityRole="link"
      accessibilityLabel="Healthify Home"
    >
      <Text className="font-montserrat-bold text-[21px] tracking-[1.2px] text-black lg:text-[23px]">
        هيلثيفاي
      </Text>
      <Text className="font-montserrat-bold mt-[-2px] text-[13px] tracking-tighter text-black lg:text-[14px]">
        HEALTHIFY
      </Text>
    </Pressable>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const slide = useRef(new Animated.Value(0)).current; // 0 = closed, 1 = open
  const useNative = Platform.OS !== "web";

  /* ───────── Scroll shadow ───────── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ───────── Drawer animation ───────── */
  useEffect(() => {
    if (open) {
      setMounted(true);
      Animated.timing(slide, {
        toValue: 1,
        duration: 280,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: useNative,
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: 0,
        duration: 220,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: useNative,
      }).start(({ finished }) => {
        if (finished) setMounted(false);
      });
    }
  }, [open, slide, useNative]);

  /* ───────── Body scroll lock + Escape key (web) ───────── */
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* ───────── Close drawer if screen becomes desktop ───────── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ───────── Navigate / scroll to section ───────── */
  const goTo = useCallback((id: string) => {
    setOpen(false);
    if (typeof document === "undefined") return;

    // drawer band hone ke baad scroll (body lock hatne ka wait)
    setTimeout(() => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 120);
  }, []);

  const translateX = slide.interpolate({
    inputRange: [0, 1],
    outputRange: [-340, 0],
  });

  return (
    <>
      {/* ───────────── Fixed Navbar ───────────── */}
      <View
        style={FIXED_TOP}
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_14px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <View
          className="mx-auto w-full max-w-7xl flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-24"
          style={{ height: NAV_HEIGHT }}
        >
          {/* Mobile: Hamburger (left) */}
          <Pressable
            onPress={() => setOpen(true)}
            className="h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#F6EFEA] lg:hidden"
            accessibilityRole="button"
            accessibilityLabel="Open menu"
            accessibilityState={{ expanded: open }}
          >
            <LuMenu size={24} strokeWidth={2} color="#111111" />
          </Pressable>

          {/* Logo (mobile: center, desktop: left) */}
          <View className="flex-1 items-center lg:flex-none lg:items-start">
            <Logo onPress={() => goTo("home")} />
          </View>

          {/* Desktop: Navigation Links */}
          <View className="hidden flex-1 flex-row items-center justify-start gap-5 lg:ml-8 lg:flex xl:ml-28 xl:gap-6">
            {NAV_LINKS.map(({ label, id }) => (
              <Pressable
                key={id}
                onPress={() => goTo(id)}
                accessibilityRole="link"
                accessibilityLabel={`Navigate to ${label}`}
              >
                <Text className="font-montserrat-semibold text-[12px] text-black transition-colors duration-200 hover:text-[#6B3E26]">
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Get Started (sm+) */}
          <Pressable
            onPress={() => goTo("contact")}
            className="hidden flex-row items-center rounded-full bg-[#6B3E26] px-4 py-2.5 transition-all duration-200 hover:bg-[#573120] hover:shadow-md sm:flex lg:ml-6 lg:px-5 lg:py-3 xl:ml-10"
            accessibilityRole="button"
            accessibilityLabel="Get Started"
          >
            <Text className="font-montserrat-semibold text-[12px] text-white lg:text-[13px]">
              Get Started
            </Text>
            <Text className="font-montserrat-semibold ml-2 text-[16px] text-white lg:text-[17px]">
              →
            </Text>
          </Pressable>

          {/* Mobile (< sm): right spacer taake logo center rahe */}
          <View className="h-10 w-10 sm:hidden" />
        </View>
      </View>

      {/* Spacer: fixed navbar ki wajah se content navbar ke neeche se shuru ho */}
      <View style={{ height: NAV_HEIGHT }} className="w-full bg-white" />

      {/* ───────────── Mobile Drawer ───────────── */}
      {mounted && (
        <View style={FIXED_FULL} className="lg:hidden">
          {/* Overlay */}
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.45)",
              opacity: slide,
            }}
          >
            <Pressable
              onPress={() => setOpen(false)}
              style={{ flex: 1 }}
              accessibilityRole="button"
              accessibilityLabel="Close menu"
            />
          </Animated.View>

          {/* Slider */}
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "82%",
              maxWidth: 320,
              backgroundColor: "#FFFFFF",
              transform: [{ translateX }],
            }}
          >
            <View className="h-full w-full shadow-[4px_0_24px_rgba(0,0,0,0.15)]">
              {/* Drawer header */}
              <View className="flex-row items-center justify-between border-b border-[#EFE7E1] px-5 py-3">
                <Logo onPress={() => goTo("home")} />

                <Pressable
                  onPress={() => setOpen(false)}
                  className="h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#F6EFEA]"
                  accessibilityRole="button"
                  accessibilityLabel="Close menu"
                >
                  <LuX size={22} strokeWidth={2} color="#111111" />
                </Pressable>
              </View>

              {/* Links */}
              <View className="flex-1 px-3 py-4">
                {NAV_LINKS.map(({ label, id }) => (
                  <Pressable
                    key={id}
                    onPress={() => goTo(id)}
                    className="flex-row items-center justify-between rounded-[10px] px-3 py-3.5 transition-colors duration-200 hover:bg-[#F6EFEA]"
                    accessibilityRole="link"
                    accessibilityLabel={`Navigate to ${label}`}
                  >
                    <Text className="font-montserrat-semibold text-[14px] text-black">
                      {label}
                    </Text>
                    <LuArrowRight size={15} strokeWidth={2} color="#9A8B80" />
                  </Pressable>
                ))}
              </View>

              {/* Drawer CTA */}
              <View className="border-t border-[#EFE7E1] px-5 py-5">
                <Pressable
                  onPress={() => goTo("contact")}
                  className="flex-row items-center justify-center rounded-full bg-[#6B3E26] px-5 py-3.5 transition-all duration-200 hover:bg-[#573120]"
                  accessibilityRole="button"
                  accessibilityLabel="Get Started"
                >
                  <Text className="font-montserrat-semibold text-[14px] text-white">
                    Get Started
                  </Text>
                  <Text className="font-montserrat-semibold ml-2 text-[17px] text-white">
                    →
                  </Text>
                </Pressable>
              </View>
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
}