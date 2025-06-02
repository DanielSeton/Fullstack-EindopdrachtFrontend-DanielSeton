export const addTags = (tag, selectedTag, setSelectedTag) => {
    if (!selectedTag.includes(tag)) {
        setSelectedTag(tag);
    }
}