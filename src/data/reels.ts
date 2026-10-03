import reelPosterImg from '../assets/images/lycas_reel_cinematic_1789754471388.jpg';
import { ReelItem } from '../types';

/**
 * =========================================================================
 * EASILY REPLACE REEL VIDEOS HERE
 * Change these URLs to your own MP4 / CDN / S3 / Cloud video links.
 * =========================================================================
 */
export const reel1Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
export const reel2Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';
export const reel3Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';
export const reel4Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4';
export const reel5Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4';
export const reel6Video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4';

/**
 * =========================================================================
 * EASILY REPLACE REEL POSTERS / THUMBNAILS HERE
 * =========================================================================
 */
export const reel1Thumbnail = reelPosterImg;
export const reel2Thumbnail = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&h=1067&q=80';
export const reel3Thumbnail = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&h=1067&q=80';
export const reel4Thumbnail = 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&h=1067&q=80';
export const reel5Thumbnail = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&h=1067&q=80';
export const reel6Thumbnail = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=1067&q=80';

export const REELS_DATA: ReelItem[] = [
  {
    id: 1,
    reelNumber: 'REEL 01',
    title: 'Building a Brand That Gets Noticed',
    category: 'Brand Strategy',
    videoUrl: reel1Video,
    thumbnail: reel1Thumbnail,
    duration: '0:45',
    views: '240K',
  },
  {
    id: 2,
    reelNumber: 'REEL 02',
    title: 'Behind the Scenes',
    category: 'Production Studio',
    videoUrl: reel2Video,
    thumbnail: reel2Thumbnail,
    duration: '0:38',
    views: '185K',
  },
  {
    id: 3,
    reelNumber: 'REEL 03',
    title: 'Business Growth',
    category: 'Digital Strategy',
    videoUrl: reel3Video,
    thumbnail: reel3Thumbnail,
    duration: '0:52',
    views: '310K',
  },
  {
    id: 4,
    reelNumber: 'REEL 04',
    title: 'Podcast Moments',
    category: 'Founder Talk',
    videoUrl: reel4Video,
    thumbnail: reel4Thumbnail,
    duration: '0:59',
    views: '420K',
  },
  {
    id: 5,
    reelNumber: 'REEL 05',
    title: 'Creative Campaign',
    category: 'Commercial Film',
    videoUrl: reel5Video,
    thumbnail: reel5Thumbnail,
    duration: '0:41',
    views: '190K',
  },
  {
    id: 6,
    reelNumber: 'REEL 06',
    title: 'Client Transformation',
    category: 'Case Study',
    videoUrl: reel6Video,
    thumbnail: reel6Thumbnail,
    duration: '0:49',
    views: '275K',
  },
];
