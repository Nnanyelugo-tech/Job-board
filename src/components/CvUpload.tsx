
import { Upload, CheckCircle } from "lucide-react";

interface CvUploadProps {
  cvFile: File | null;
  onFileChange: (file: File | null) => void;
  disabled?: boolean;
}

export default function CvUpload({ cvFile, onFileChange, disabled = false }: CvUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileChange(file);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium mb-1">Upload CV (PDF or Word, max 5MB)</label>
      <div className="relative">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={disabled}
        />
        <div className={`flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-lg transition-colors ${
          cvFile ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-emerald-400"
        }`}>
          {cvFile ? (
            <>
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-medium">{cvFile.name}</span>
            </>
          ) : (
            <>
              <Upload className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-500">Click or drag to upload your CV</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
