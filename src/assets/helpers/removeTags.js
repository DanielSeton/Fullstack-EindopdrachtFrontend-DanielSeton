export const removeTags = (tagRemove, selectedTag, setSelectedTag) => {
    setSelectedTag(selectedTag.filter((tag) => tag !== tagRemove));
}