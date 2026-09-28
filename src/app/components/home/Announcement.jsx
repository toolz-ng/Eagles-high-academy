import Track from "./Track";

export default function AnnouncementMarquee() {
  return (
    <div className="bg-navy overflow-hidden py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite]">
        <Track />
        <Track aria-hidden="true" />
      </div>
    </div>
  );
}