import Banner from "./manga-banner";

export default function MangaMaintain() {
  return (
    <>
      <Banner src="/images/maintain.webp" />
      <div className="mt-64 flex flex-col gap-6">
        <p className="text-center text-3xl font-black uppercase drop-shadow-lg">
          MangaDex đang bảo trì, vui lòng quay lại sau!
        </p>
      </div>
    </>
  );
}
