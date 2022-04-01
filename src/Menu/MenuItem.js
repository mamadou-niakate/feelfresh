import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import './styles.css';


export function FadeInSection({ menuItem }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
      <Card 
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} 
        ref={domRef} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia component="img" image={menuItem.imageURL} alt="random"  />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
              {menuItem.name}
          </Typography>
          <Typography>
              This is a media card. You can use this section to describe the
              content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
    </Card>
  );
}

