import { MakeTime, GeoVector, Ecliptic } from 'astronomy-engine';

/**
 * Calculate the Gene Key based on birth date, time, and location
 * The Sun's position in the ecliptic (0-360°) is mapped to 64 Gene Keys
 * Each Gene Key represents approximately 5.625 degrees of the zodiac
 */
export interface BirthData {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  latitude: number;
  longitude: number;
}

export interface AstronomyResult {
  geneKey: number;
  sunLongitude: number;
  sunSign: string;
}

// Gene Key order based on the I-Ching hexagram sequence starting from 0° Aries
// This is the traditional Human Design/Gene Keys wheel order
const GENE_KEY_WHEEL_ORDER = [
  41, 19, 13, 49, 30, 55, 37, 63, 22, 36, 25, 17, 21, 51, 42, 3,
  27, 24, 2, 23, 8, 20, 16, 35, 45, 12, 15, 52, 39, 53, 62, 56,
  31, 33, 7, 4, 29, 59, 40, 64, 47, 6, 46, 18, 48, 57, 32, 50,
  28, 44, 1, 43, 14, 34, 9, 5, 26, 11, 10, 58, 38, 54, 61, 60
];

/**
 * Convert ecliptic longitude (0-360°) to Gene Key number (1-64)
 */
function longitudeToGeneKey(longitude: number): number {
  // Normalize longitude to 0-360 range
  let normalizedLongitude = longitude % 360;
  if (normalizedLongitude < 0) {
    normalizedLongitude += 360;
  }

  // Each Gene Key occupies 5.625 degrees (360 / 64)
  const index = Math.floor(normalizedLongitude / 5.625);
  
  // Ensure index is within bounds
  const safeIndex = Math.min(Math.max(index, 0), 63);
  
  return GENE_KEY_WHEEL_ORDER[safeIndex];
}

/**
 * Get zodiac sign from ecliptic longitude
 */
function getZodiacSign(longitude: number): string {
  const normalizedLongitude = ((longitude % 360) + 360) % 360;
  const signs = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  const signIndex = Math.floor(normalizedLongitude / 30);
  return signs[signIndex];
}

/**
 * Calculate Gene Key from birth data using Astronomy Engine
 */
export function calculateGeneKey(birthData: BirthData): AstronomyResult {
  try {
    // Parse the date and time
    const [year, month, day] = birthData.date.split('-').map(Number);
    const [hours, minutes] = birthData.time.split(':').map(Number);

    // Create a Date object (in local time, which we'll treat as the birth location's time)
    const birthDateTime = new Date(year, month - 1, day, hours, minutes, 0);

    // Convert to Astronomy Engine date format
    const astroDate = MakeTime(birthDateTime);

    // Calculate the Sun's ecliptic coordinates
    const ecliptic = Ecliptic(GeoVector('Sun', astroDate, false));

    // Get the ecliptic longitude (this is what we need for Gene Keys)
    const sunLongitude = ecliptic.elon;

    // Convert to Gene Key
    const geneKey = longitudeToGeneKey(sunLongitude);

    // Get zodiac sign
    const sunSign = getZodiacSign(sunLongitude);

    return {
      geneKey,
      sunLongitude,
      sunSign
    };
  } catch (error) {
    console.error('Error calculating Gene Key:', error);
    // Fallback to a default Gene Key if calculation fails
    return {
      geneKey: 1,
      sunLongitude: 0,
      sunSign: 'Aries'
    };
  }
}

/**
 * Get a brief description of the calculation
 */
export function getCalculationDescription(result: AstronomyResult): string {
  return `Your Sun was at ${result.sunLongitude.toFixed(2)}° in ${result.sunSign}, corresponding to Gene Key ${result.geneKey}`;
}

