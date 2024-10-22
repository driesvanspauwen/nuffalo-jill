const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "0px",
  size = "text-4xl lg:text-5xl",
  titleColor = "white" // Dit field bepaald de default tekstkleur voor alle h2 titels,
                        // voor specifieke kleuren zie client/tailwind.config.js
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  size?: string;
  titleColor?: string;
}) => {
  return (
      <>
        <div
            className={`w-full ${center ? "mx-auto text-center" : ""}`}
            style={{ maxWidth: width, marginBottom: mb }}
        >
          <h2 className={`font-bold !leading-tight text-${titleColor} ${size} uppercase`}>
            {title}
          </h2>
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        </div>
      </>
  );
};

export default SectionTitle;
