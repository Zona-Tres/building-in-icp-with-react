type CardContentProps = {
    children: React.ReactNode;
};

export function CardContent(props: CardContentProps) {
    const { children } = props;

    return <div className="flex-1 overflow-y-auto p-4 bg-gray-100">{children}</div>
};
