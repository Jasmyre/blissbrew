import HeroSection from "@/components/hero-section/HeroSection";
import AboutSection from "@/components/about-section/AboutSection";
import FooterSection from "@/components/footer-section/FooterSection";
import ProductSection from "@/components/product-section/ProductSection";
import ContactSection from "@/components/contact-section/ContactSection";
import TestimonialSection from "@/components/testimonial-section/TestimonialSection";

const Home = () => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProductSection
				products={[
					{
						name: "Classic Espresso",
						price: 2.5,
						src: "/coffee/classic_espresso.png",
						description:
							"A rich and intense shot of espresso with a velvety crema on top, perfect for a quick caffeine boost.",
					},
					{
						name: "Cappuccino",
						price: 3.5,
						src: "/coffee/cappuccino.png",
						description:
							"A creamy blend of espresso, steamed milk, and milk foam, topped with a sprinkle of cocoa powder.",
					},
					{
						name: "Vanilla Latte",
						price: 4.0,
						src: "/coffee/vanilla_latte.png",
						description:
							"A smooth latte with a hint of vanilla syrup, combining the perfect balance of espresso and steamed milk.",
					},
					{
						name: "Mocha",
						price: 4.5,
						src: "/coffee/mocha.png",
						description:
							"A delicious mix of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream.",
					},
					{
						name: "Caramel Macchiato",
						price: 4.25,
						src: "/coffee/caramel_macchiato.png",
						description:
							"Layers of espresso, steamed milk, and caramel syrup, finished with a caramel drizzle.",
					},
					{
						name: "Cold Brew",
						price: 3.75,
						src: "/coffee/cold_brew.png",
						description:
							"A refreshing cold brew coffee steeped for 12-24 hours, offering a smooth and rich flavor with less acidity.",
					},
					{
						name: "Pumpkin Spice Latte",
						price: 3.75,
						src: "/coffee/pumkpkin_spice_latte.png",
						description:
							"A seasonal favorite with espresso, steamed milk, and pumpkin spice syrup, topped with whipped cream and cinnamon.",
					},
					{
						name: "Affogato",
						price: 4.0,
						src: "/coffee/affogato.png",
						description:
							"A delightful treat featuring a hot shot of espresso poured over a scoop of vanilla ice cream.",
					},
				]}
			/>
			<TestimonialSection>Customers Feedback</TestimonialSection>
			<ContactSection>Contact Us</ContactSection>
			<FooterSection />
		</main>
	);
};

export default Home;
