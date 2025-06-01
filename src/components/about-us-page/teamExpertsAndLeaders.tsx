import ImageTextCard from "@/components/ImageTextCard";

export default function TeamExpertsAndLeaders() {
  return (
    <section className="bg-[#F1F9F4] px-5 lg:px-0">
      <div className="max-w-[1180px] flex flex-col justify-center gap-10 mx-auto py-15">
        <h2 className="text-[24px] md:text-[36px] font-bold text-center">
          A Team of Experts and Leaders
        </h2>
        <div className="mx-auto">
          <ImageTextCard
            imagePath="/image/about-us/thumbnail.png"
            title="It Starts with Us Because of You"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit arcu, venenatis eget vulputate vel, condimentum id dui. Quisque consectetur erat elit, id faucibus dolor sollicitudin ut. Donec suscipit magna sit amet nulla mattis, et consectetur diam tristique."
            description2="Vestibulum sed nibh eleifend, feugiat turpis eget, tristique ex. Aenean sodales quis eros ac efficitur. Fusce fringilla turpis ipsum, in sagittis orci rutrum ac."
            description3="Integer neque ante, ultrices at ornare sed, blandit eu elit. Fusce purus mi, convallis mattis porttitor ut, dictum non orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis tincidunt urna nec diam vestibulum dignissim."
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
}
