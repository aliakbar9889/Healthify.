import React from "react";
import { ScrollView } from "react-native";
import "./global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/About";
import ServicesAndAdvantagesSection from "./components/ServicesAndChoose";
import PlanSection from "./components/GrowthAndProcess";
import StoriesAndFaqsSection from "./components/StoriesAndFaqs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ScrollView
      className="flex-1"
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <Navbar />
      <Hero />
      <AboutSection /> 
      <ServicesAndAdvantagesSection/>
      <PlanSection />
      <StoriesAndFaqsSection />
      <Footer />
    </ScrollView>
  
  );
}