import Fab from '@mui/material/Fab';
import UploadIcon from '@mui/icons-material/Upload';
interface Props {
    onClick:()=>void
}
export default function FloatingActionButtons(props: Props) {
    return (
        <Fab onClick={props.onClick} color="primary" aria-label="add" sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(5),
            right: (theme) => theme.spacing(5)
        }}>
            <UploadIcon />
        </Fab>
    );
}