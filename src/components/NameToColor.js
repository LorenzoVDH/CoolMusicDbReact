const nameToColor = (name) => {
    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return hash;
    };

    const intToLightRGB = (i) => {
        const lightOffset = 100;
        const r = ((i & 0xFF0000) >> 16) + lightOffset % 255;
        const g = ((i & 0x00FF00) >> 8) + lightOffset % 255;
        const b = (i & 0x0000FF) + lightOffset % 255;

        return (
            (r > 255 ? 255 : r) * 0x10000 +
            (g > 255 ? 255 : g) * 0x100 +
            (b > 255 ? 255 : b)
        ).toString(16).toUpperCase();
    };

    return `#${intToLightRGB(hashCode(name))}`;
};

export default nameToColor;
