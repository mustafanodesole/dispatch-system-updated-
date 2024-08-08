export function checkIfPdfExists(url: string): boolean {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = xhr.response;
        console.log(blob, "Blob")
        if (blob.type === 'application/pdf') {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    };
    xhr.send();
    return true;
  }

  export function checkIfWordExists(url: string): boolean {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          const blob = xhr.response;
          if (blob.type === 'application/msword' || 
              blob.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          };
          xhr.send();
          return true;
  }
  

export const downloadFile = async ( fileUrl: string, name: string, type: string) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', name + type);
      document.body.appendChild(link);
      link.click();
      link.parentNode && link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  };