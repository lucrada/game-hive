export function VerticalSpacer(props: { rem: number }): JSX.Element {
    return (
        <div style={{ marginTop: props.rem + 'rem' }}></div>
    )
}