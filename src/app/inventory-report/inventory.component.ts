//import jsPDF from 'jsPDF';

/**downloadPDF(){
      const doc = new jsPDF();

      const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
      const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
      const length = this.tableData.length;
      const Dates = this.tableData.map(tit => tit.SaleDate);
      const averages = this.tableData.map(avg => avg.AverageSold);

      let finalY = 160;
      const newCanvas = document.querySelector('#avgChart') as HTMLCanvasElement;
      const newCanvasImg = newCanvas.toDataURL('image/png',1.0);
    }**/