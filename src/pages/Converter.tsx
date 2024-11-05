import React, { useState } from 'react';
import { ArrowRight, Save } from 'lucide-react';
import Editor from '@monaco-editor/react';
import { Conversion } from '../types';

export function Converter() {
  const [sourceCode, setSourceCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [conversions, setConversions] = useState<Conversion[]>([]);

  const handleConvert = async () => {
    const mockConversion = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      original: sourceCode,
      converted: '// Converted code will appear here\nfunction modernCode() {\n  // ...\n}',
    };
    
    setConvertedCode(mockConversion.converted);
    setConversions(prev => [mockConversion, ...prev]);
  };

  const handleSave = () => {
    const conversion = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      original: sourceCode,
      converted: convertedCode,
    };
    setConversions(prev => [conversion, ...prev]);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          レガシーコード
        </label>
        <div className="h-[600px] border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-light"
            value={sourceCode}
            onChange={(value) => setSourceCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">
            変換後のコード
          </label>
          <div className="space-x-2">
            <button
              onClick={handleConvert}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <ArrowRight className="h-4 w-4 mr-2" />
              変換
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-4 w-4 mr-2" />
              保存
            </button>
          </div>
        </div>
        <div className="h-[600px] border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-light"
            value={convertedCode}
            options={{
              readOnly: true,
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
      </div>
    </div>
  );
}