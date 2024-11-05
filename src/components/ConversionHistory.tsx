import React from 'react';
import { Clock, Code2 } from 'lucide-react';
import type { Conversion } from '../types';

interface ConversionHistoryProps {
  conversions: Conversion[];
}

export function ConversionHistory({ conversions }: ConversionHistoryProps) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">変換履歴</h2>
      </div>
      {conversions.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          <Code2 className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2">変換履歴がありません</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {conversions.map((conversion) => (
            <li key={conversion.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Code2 className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      コード変換 #{conversion.id}
                    </p>
                    <div className="flex items-center mt-1">
                      <Clock className="h-4 w-4 text-gray-400 mr-1" />
                      <p className="text-sm text-gray-500">
                        {new Date(conversion.timestamp).toLocaleString('ja-JP')}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    // TODO: Implement view details functionality
                  }}
                >
                  詳細を見る
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}