import {
  Header,
  Footer,
  CarouselCard,
  Trending,
  BlogCard,
} from "../components";
export default function Home() {
  return (
    <div>
      <Header />
      <CarouselCard />
      <Trending />
      <BlogCard />
      <Footer />
    </div>
  );
}
