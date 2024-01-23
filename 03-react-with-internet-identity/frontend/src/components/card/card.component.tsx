type CardProps = {
    children: React.ReactNode;
};

export default function Card(props: CardProps) {
    const { children } = props;
    return (
        <div className="w-full h-full flex flex-col bg-black p-10">
            {children}
        </div>
    );
}
