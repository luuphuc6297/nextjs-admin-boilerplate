// ** MUI Imports
import CardSnippet from '@/core/components/card-snippet'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import PageHeader from '@/core/components/page-header'
import DropzoneWrapper from '@/core/styles/libs/react-dropzone'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

const FileUploader = () => {
    return (
        <DropzoneWrapper>
            <Grid container spacing={6} className="match-height">
                <PageHeader
                    title={
                        <Typography variant="h5">
                            <Link
                                href="https://github.com/react-dropzone/react-dropzone/"
                                target="_blank"
                            >
                                React Dropzone
                            </Link>
                        </Typography>
                    }
                    subtitle={
                        <Typography variant="body2">
                            Simple HTML5 drag-drop zone with React.js
                        </Typography>
                    }
                />
                <Grid item xs={12}>
                    <CardSnippet
                        title="Upload Multiple Files"
                        code={{
                            tsx: source.FileUploaderMultipleTSXCode,
                            jsx: source.FileUploaderMultipleJSXCode,
                        }}
                    >
                        <FileUploaderMultiple />
                    </CardSnippet>
                </Grid>
                <Grid item xs={12}>
                    <CardSnippet
                        title="Upload Single Files"
                        code={{
                            tsx: source.FileUploaderSingleTSXCode,
                            jsx: source.FileUploaderSingleJSXCode,
                        }}
                    >
                        <FileUploaderSingle />
                    </CardSnippet>
                </Grid>
                <Grid item xs={12}>
                    <CardSnippet
                        title="Upload Files with Restrictions"
                        code={{
                            tsx: source.FileUploaderRestrictionsTSXCode,
                            jsx: source.FileUploaderRestrictionsJSXCode,
                        }}
                    >
                        <FileUploaderRestrictions />
                    </CardSnippet>
                </Grid>
            </Grid>
        </DropzoneWrapper>
    )
}

export default FileUploader
