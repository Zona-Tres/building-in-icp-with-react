type CardHeaderProps = {
    children: React.ReactNode;
};

export function CardHeader(props: CardHeaderProps) {
    const { children } = props;

    return <h3 className="text-white p-4 text-2xl font-bold">{children}</h3>
};
