const GetAppBadges = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-sm text-foreground mb-4">Get the app.</p>
      <div className="flex flex-wrap justify-center gap-2">
        <a
          href="https://apps.apple.com/app/instagram/id389801252"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Download on the App Store"
            className="h-10"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Get it on Google Play"
            className="h-10"
          />
        </a>
        <a
          href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Get_it_from_Microsoft_Badge.svg"
            alt="Get it from Microsoft"
            className="h-10"
          /> */}
        </a>
      </div>
    </div>
  );
};

export default GetAppBadges;
