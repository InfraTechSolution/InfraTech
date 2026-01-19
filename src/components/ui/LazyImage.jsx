import { useState } from 'react';
import Loading from '../../pages/loading';

/**
 * LazyImage component to show a loader while image is loading.
 * 
 * @param {string} src - The source of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {string} className - Additional CSS classes.
 */
export default function LazyImage({ src, alt, className = "", ...props }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <Loading />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                {...props}
            />
        </div>
    );
}
