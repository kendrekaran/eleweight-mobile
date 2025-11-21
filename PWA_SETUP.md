# PWA (Progressive Web App) Setup

EleWeight is now a fully installable Progressive Web App! 🎉

## Features

- ✅ **Installable**: Users can install the app on their devices (iOS, Android, Desktop)
- ✅ **Offline Support**: Service worker caches assets for offline access
- ✅ **App-like Experience**: Runs in standalone mode without browser UI
- ✅ **Fast Loading**: Precached assets load instantly
- ✅ **Push Notifications**: Ready for future notification features

## How to Install

### On Android (Chrome/Edge)
1. Visit the app in your browser
2. Look for the install prompt that appears after a few seconds
3. Tap "Install Now" or use the browser menu → "Install app"
4. The app will be added to your home screen

### On iOS (Safari)
1. Visit the app in Safari
2. Tap the Share button (square with arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right corner

### On Desktop (Chrome/Edge)
1. Visit the app in your browser
2. Look for the install icon in the address bar
3. Click it and confirm the installation
4. The app will open in its own window

## Technical Details

### Files
- `/public/manifest.json` - PWA manifest with app metadata
- `/public/icon-192.png` - App icon (192x192)
- `/public/icon-512.png` - App icon (512x512)
- `/public/sw.js` - Service worker for offline support and caching
- `/src/components/pwa/InstallPrompt.tsx` - Install prompt component
- `/src/components/pwa/ServiceWorkerRegistration.tsx` - Service worker registration

### Configuration
The app uses a manual PWA setup with a custom service worker that's compatible with Next.js 16 and Turbopack.

The service worker is registered in production mode only via the `ServiceWorkerRegistration` component in the root layout.

### Caching Strategy
- **Precache**: Essential assets (icons, manifest, root page)
- **Cache First**: Static assets load from cache, fallback to network
- **Runtime Cache**: Dynamic content is cached after first fetch

## Testing

### Local Testing
PWA features are disabled in development mode. To test:

1. Build the production version:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

3. Visit `http://localhost:3000` and test the install prompt

### Testing on Mobile
1. Deploy to a hosting service (Vercel, Netlify, etc.)
2. Visit the deployed URL on your mobile device
3. Test the installation process

## Customization

### Changing App Colors
Update the theme colors in:
- `/public/manifest.json` - `theme_color` and `background_color`
- `/src/app/layout.tsx` - `<meta name="theme-color">`

### Changing App Icons
Replace the icon files in `/public/`:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

### Modifying Install Prompt
Edit `/src/components/pwa/InstallPrompt.tsx` to customize:
- Prompt timing (currently shows after 3 seconds)
- Prompt design and messaging
- Dismissal behavior

## Browser Support

| Browser | Install Support | Offline Support |
|---------|----------------|-----------------|
| Chrome (Android) | ✅ | ✅ |
| Safari (iOS) | ✅ | ✅ |
| Edge (Desktop) | ✅ | ✅ |
| Chrome (Desktop) | ✅ | ✅ |
| Firefox | ⚠️ Limited | ✅ |

## Future Enhancements

- [ ] Push notifications for workout reminders
- [ ] Background sync for offline workout logging
- [ ] Share target API for sharing workouts
- [ ] Periodic background sync for data updates
