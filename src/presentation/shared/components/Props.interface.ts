export default interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    /**
     * Element containment. https://reactjs.org/docs/composition-vs-inheritance.html#containment
     */
    children?: React.ReactNode
}