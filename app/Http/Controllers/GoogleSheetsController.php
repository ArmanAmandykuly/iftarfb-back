<?php

namespace App\Http\Controllers;

use Exception;
use Google_Client;
use Google_Service_Sheets;
use Illuminate\Http\Request;

class GoogleSheetsController extends Controller
{
    private $spreadsheetId = '1X0GfN32zQdr0jOb2DPnIpIKVS6PpLBxX8-v3gL8m_DQ';

    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function appendRow(Request $request)
    {
        $client = $this->getClient();
        $service = new Google_Service_Sheets($client);

        $columns = array("waiterName", "ratingWaiter", "ratingService", "ratingFood", "comments", "userName", "phoneNumber");

        // Get values to append
        $values = [
            array_map(function($column) use ($request) {
                return $request->json($column);
            }, $columns)
        ];

        $body = new \Google_Service_Sheets_ValueRange([
            'values' => $values
        ]);

        $params = [
            'valueInputOption' => 'RAW'
        ];

        $range = 'Лист1'; // Change to your specific sheet name and range

        $result = $service->spreadsheets_values->append(
            $this->spreadsheetId,
            $range,
            $body,
            $params
        );

        return response()->json(['success' => true, 'updatedRange' => $result->getUpdates()->getUpdatedRange()]);
    }

    private function getClient() {
        $client = new Google_Client();
        $client->setApplicationName('Google Sheets API Laravel');
        $client->setScopes(Google_Service_Sheets::SPREADSHEETS);
        $client->setAuthConfig(storage_path('app/credentials.json')); // Path to your credentials.json
        $client->setAccessType('offline');

        $guzzleClient = new \GuzzleHttp\Client(array( 'curl' => array( CURLOPT_SSL_VERIFYPEER => false, ), ));
        $client->setHttpClient($guzzleClient);

        return $client;
    }
}
