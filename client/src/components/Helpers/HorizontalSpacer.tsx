export function HorizontalSpacer(props: { rem: number }): JSX.Element {
    return (
        <div style={{ marginLeft: props.rem + 'rem' }}></div>
    )
}