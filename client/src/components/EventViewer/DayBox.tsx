// this will be used to make a event day where events can be added to the day
// This will use the vars of 'day', 'time', 'location' and 'subscription'
const DayBox = (props: { packageName: string; children: React.ReactNode }) => {
  const { packageName, children } = props;

  return (
    <div className="w-full">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-brown-dark dark:shadow-two dark:hover:shadow-gray-dark">
        <div className="flex items-center justify-between">
          <h4 className="mx-auto mb-2 w-3/4 text-center text-3xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <hr className="my-4" />
        <div>{children}</div>
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>
      </div>
    </div>
  );
};

export default DayBox;
