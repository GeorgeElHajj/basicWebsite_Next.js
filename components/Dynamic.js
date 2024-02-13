export default function Dynamic({ title, imageSrc, description, titleClassName, imageClassName, descriptionClassName, containerClassName }) {
    return (
        <div className={`${containerClassName} bg-black p-6 container mx-auto 2xl:max-w-7xl`}>
            <img className={imageClassName} src={imageSrc} alt="Image" />
            <div className="p-6">
                <h2 className={titleClassName}>{title}</h2>
                <p className={descriptionClassName}>{description}</p>
            </div>
        </div>
    );
};