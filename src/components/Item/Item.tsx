import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IBook } from '../../utils/models';

export const Item = (props: IBook) => {
 return(
  <Card sx={{ minWidth: 275, maxWidth: 300, minHeight: 200 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} variant="h4" data-testid="title" gutterBottom>
        {props.book_title}
      </Typography>
      <Typography color="text.primary" data-testid="author" component="div">
        {props.book_author}
      </Typography>
      <Typography color="text.secondary" data-testid="publication-info">
      {props.book_publication_city}, {props.book_publication_country} {props.book_publication_year}
      </Typography>
      <Typography sx={{ mb: 1, fontSize: 12, fontStyle: 'italic'}} color="text.secondary" component="span" data-testid="pages">
        Pages: {props.book_pages}
      </Typography>
    </CardContent>
  </Card>
 )
}
