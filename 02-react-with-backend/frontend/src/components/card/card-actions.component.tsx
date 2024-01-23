type CardActionsProps = {
    children: React.ReactNode;
};

export function CardActions(props: CardActionsProps) {
    const { children } = props;

    return (
        <>
            <div className="border-t"></div>
            <div className="p-4 bg-gray-100 flex justify-end">{children}</div>
        </>
    )
}
