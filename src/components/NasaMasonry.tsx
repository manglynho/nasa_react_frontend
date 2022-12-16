import { useState } from 'react';
import { useQuery } from 'react-query';
import { Box, Button } from '@mui/material';

import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';

import FsLightbox from 'fslightbox-react'; 

import { getImages } from '../services/imageService';
import { ImageEntry } from '../types/image_type';
import { imgsToShow } from '../utils/getRandomImgs';

export const NasaMasonry = () => {
    const [images, setImages] = useState <ImageEntry[]>([]);
    const [allImages, setAllImages] = useState <ImageEntry[]>([]);
    const [toggler, setToggler] = useState <boolean>(false);
    const { status } = useQuery("imageList", getImages, {
        onSuccess: (info) => {
        const imgs = imgsToShow(info?.data.photos);
        setImages(imgs ?? []);
        setAllImages(info?.data.photos ?? []);
        }
    });

    const loadImages = () => {
        const imgs = imgsToShow(allImages);
        setImages(imgs ?? []);
    }

    return (        
        <Box sx={{ my: 2 }}>
            {status === "error" && <p> Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (                
            <>
            <Box justifyContent="center" display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Button className="loadMoreBtn" size="small" variant="contained" onClick={() => loadImages()}>Load More</Button>
            </Box>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter="5px">
                {images.map((image : ImageEntry) => (
                    <img
                    key={image.id}
                    alt={`NASA${image.id}`}
                    src={image.img_src}
                    style={{width: "100%", display: "block"}}
                    onClick={() => setToggler(!toggler)}
                    className="photoMasonry"
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
            <FsLightbox type="image" toggler={toggler} sources={images.map((image : ImageEntry)=>image.img_src)} />            
            </>
            )}
        </Box>  
    )
}