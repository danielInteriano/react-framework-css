import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function MediaCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="https://placeimg.com/400/200/animals"
				alt="gato"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Animals
				</Typography>
				<Typography variant="body1" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Información</Button>
				<Button size="small">Descargar</Button>
			</CardActions>
		</Card>
	);
}
