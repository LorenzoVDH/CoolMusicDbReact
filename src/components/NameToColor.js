const nameToColor = (name) => {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };

    const intToLightRGB = (i) => {
        const lightMin = 199;
        const lightMax = 255;
        const scaleFactor = (lightMax - lightMin) / 255;
        const r = Math.floor(((i & 0xFF0000) >> 16) * scaleFactor) + lightMin;
        const g = Math.floor(((i & 0x00FF00) >> 8) * scaleFactor) + lightMin;
        const b = Math.floor((i & 0x0000FF) * scaleFactor) + lightMin;

        console.log(r, g, b);

        return (
            (r > 255 ? 255 : r) * 0x10000 +
            (g > 255 ? 255 : g) * 0x100 +
            (b > 255 ? 255 : b)
        ).toString(16).toUpperCase();
    };

    return `#${intToLightRGB(hashCode(name))}`;
};

export default nameToColor;
