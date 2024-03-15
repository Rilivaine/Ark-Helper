/*
    This function was used because for some
    reason `navigator.clipboard` wasn't working on mobile
*/
export async function copyToClipboard(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";

    document.body.prepend(textArea);
    textArea.select();

    try {
        document.execCommand('copy');
    } catch (error) {
        console.error(error);
    } finally {
        textArea.remove();
    }
}
