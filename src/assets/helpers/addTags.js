export const addTags = (tag, selectedTag = [], setSelectedTag) => {
    if (tag && !selectedTag.includes(tag)) {
        setSelectedTag([...selectedTag, tag]);
    }
}