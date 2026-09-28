import { cn } from '../utils/cn';

interface GoogleMapProps {
  address: string;
  className?: string;
}

const GoogleMap = ({ address, className }: GoogleMapProps) => {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  
  // NOTE: For a real production app, the user should provide their own API key.
  // As a fallback that "just works" without a key for this demo, 
  // we can use the standard search iframe URL which is public.
  const publicMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={cn("relative w-full h-full overflow-hidden rounded-xl", className)}>
      <iframe
        title="Company Location"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={publicMapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
