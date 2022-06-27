import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SignIcon from '../../../assets/icons/SignIcon';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AddFileFab from '../../shared/components/AddFileFab';
import UploadDialog from '../components/UploadDialog';

/**
 * Lista de archivos generados con https://www.mockaroo.com/
 */
const files = [{
    "id": 1,
    "name": "QuisOrci.avi",
    "path": "0x5f60d15965f1375b77b1abf5819b594e2fa92b2e",
    "author": 1
}, {
    "id": 2,
    "name": "NuncProinAt.xls",
    "path": "0x9dd39918caad9d438d8fd053cc4282ca38a6bcc0",
    "author": 1
}, {
    "id": 3,
    "name": "NamDuiProin.doc",
    "path": "0x553848c1d3f4bf5ae175e259829f5dfe908a34f1",
    "author": 1
}, {
    "id": 4,
    "name": "LectusAliquamSit.gif",
    "path": "0x1a5cc95e492e4cbfc7a5ccc16205c8e4a9f93c59",
    "author": 1
}, {
    "id": 5,
    "name": "DuiProinLeo.avi",
    "path": "0xae322cd2ced8ae0acb0f3b8aa4a73a6524afaa12",
    "author": 1
}, {
    "id": 6,
    "name": "Sed.xls",
    "path": "0x03ff5c216da15a478caff2f9372716ce73b8c7ba",
    "author": 1
}, {
    "id": 7,
    "name": "TurpisA.xls",
    "path": "0xa4fee0c26ecb17512ab1076497552edca6195c4b",
    "author": 1
}, {
    "id": 8,
    "name": "LiberoRutrumAc.mov",
    "path": "0x7816b96e061cd8a6dd28ae3d811bb7ac0b080d55",
    "author": 1
}, {
    "id": 9,
    "name": "VestibulumQuamSapien.mpeg",
    "path": "0x6bd41ff040f7bdad4354975aaccdc98a59ad391c",
    "author": 1
}, {
    "id": 10,
    "name": "Sit.gif",
    "path": "0x0115321535693eb8f6301e72c42ffe877338ff01",
    "author": 1
}, {
    "id": 11,
    "name": "NonSodalesSed.mp3",
    "path": "0x72e8c613602b738f8177fc7da1d98d23bb1f0f82",
    "author": 1
}, {
    "id": 12,
    "name": "Ipsum.doc",
    "path": "0xac480ae27265f297d8d71156714b4c060cabdb0d",
    "author": 1
}, {
    "id": 13,
    "name": "SapienPlacerat.xls",
    "path": "0xdc7d30c557911701762f43f0e9d910a4d3ede19f",
    "author": 1
}, {
    "id": 14,
    "name": "Nullam.jpeg",
    "path": "0x564560c4652bbe5ec4702b107f57e9f5820c52f7",
    "author": 1
}, {
    "id": 15,
    "name": "SemSed.mov",
    "path": "0x2850c36af139069463234352a69f04f2ff0eb460",
    "author": 1
}, {
    "id": 16,
    "name": "Cras.png",
    "path": "0xa63071415a9ec715c5f1fdbb44b0496d2792306a",
    "author": 1
}, {
    "id": 17,
    "name": "Consequat.avi",
    "path": "0x3fc151d4631766a9bb949d0b46005218b94ebd08",
    "author": 1
}, {
    "id": 18,
    "name": "PotentiCrasIn.avi",
    "path": "0x2650bf26c6ac3811c9b5237384f0343176b8a39e",
    "author": 1
}, {
    "id": 19,
    "name": "Posuere.avi",
    "path": "0xac7a6e42385fee69ea4533fca6ec6404cd198604",
    "author": 1
}, {
    "id": 20,
    "name": "Non.mp3",
    "path": "0xecea95ba07023f9f598a1c8a795bf6c032c7b206",
    "author": 1
}];


/**
 * Genera los elementos ListItem para cada archivo
 * TODO:
 *  - Donwload action
 *  - Sign action
 *  - Delete action
 *  - Upload action
 * @param isFileIdShowed muestra o no muestra el texto secundario
 * @returns ListItem[] devuelve elementos React tipo ListItem
 */
function generateListItems(isFileIdShowed: boolean) {
    return files.map((file) =>
        <ListItem
            secondaryAction={
                <Grid container spacing={1.5}>
                    <Grid item>
                        <IconButton edge="end" aria-label="descargar">
                            <FileDownloadIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton edge="end" aria-label="firmar">
                            <SignIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton edge="end" aria-label="eliminar">
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            }
        >
            <ListItemAvatar>
                <Avatar>
                    <InsertDriveFileIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={file.name}
                secondary={isFileIdShowed ? file.path : null}
            />
        </ListItem>
    );
}

const ListDocsTheme = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ListDocs() {
    // States:
    const [isCompact, setIsCompact] = React.useState(false);
    const [isFileIdShowed, setIsFileIdShowed] = React.useState(false);
    const [openUploadDialog, setOpenUploadDialog] = React.useState(false);    
    const handleClickOpenUploadDialog = () => {
        setOpenUploadDialog(true);
      };
    
      const handleCloseUploadDialog = () => {
        setOpenUploadDialog(false);
      };    

    // React element:
    return (
        <Container>
            <Box>
                <UploadDialog open={openUploadDialog} handleCloseUploadDialog={handleCloseUploadDialog}/>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <FormGroup row sx={{ display: 'inline' }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isCompact}
                                        onChange={(event) => setIsCompact(event.target.checked)}
                                    />
                                }
                                label="Vista compacta"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isFileIdShowed}
                                        onChange={(event) => setIsFileIdShowed(event.target.checked)}
                                    />
                                }
                                label="Mostrar ID de archivo"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={true}>
                        <ListDocsTheme>
                            <List dense={isCompact}>
                                {generateListItems(isFileIdShowed)}
                            </List>
                        </ListDocsTheme>
                    </Grid>
                </Grid>
            </Box>
            <AddFileFab onClick={handleClickOpenUploadDialog}/>
        </Container>
    );
}