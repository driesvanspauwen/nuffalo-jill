const SingleElement = ({ text, price }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-orange-100 tracking-wide">
        <span className="subpixel-antialiased mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-amber-200">
        €{price}
        </span>
        {text}
    </p>
    );


export default SingleElement;