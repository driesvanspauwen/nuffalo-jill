const SingleElement = ({ text, price }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
        <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        €{price}
        </span>
        {text}
    </p>
    );


export default SingleElement;