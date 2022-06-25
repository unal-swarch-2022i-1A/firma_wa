// Components
import Box from "@mui/material/Box";
import SimpleToolbar from "../components/SimpleToolbar";

interface Props {
    /**
     * Título de la página
     */
    title: string;
    /**
     * Contenido
     */
    children?: React.ReactNode
}

function Page(props: Props) {
    return (
        <Box>
            <SimpleToolbar title={props.title} />
            {props.children}
        </Box>
    );
}
export default Page;